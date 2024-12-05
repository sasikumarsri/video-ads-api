import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Campaigns } from 'src/entities/campaigns.entity';
import { Video } from 'src/entities/video.entity';
import { TVDevice } from 'src/entities/tv-device.entity';
import { CreateVideoAssignmentDto } from 'src/dto/video-assignment.dto';

@Injectable()
export class CampainsService {
  constructor(
    @InjectRepository(Campaigns)
    private readonly videoAssignmentRepository: Repository<Campaigns>,
    @InjectRepository(Video)
    private readonly videoRepository: Repository<Video>,
    @InjectRepository(TVDevice)
    private readonly tvDeviceRepository: Repository<TVDevice>,
  ) {}

  // async create(
  //   createVideoAssignmentDto: CreateVideoAssignmentDto,
  // ): Promise<Campaigns[]> {
  //   const { videoIds, deviceId } = createVideoAssignmentDto;

  //   // Ensure videoIds is an array
  //   if (!Array.isArray(videoIds) || videoIds.length === 0) {
  //     throw new BadRequestException('videoIds must be a non-empty array');
  //   }

  //   // Fetch the device entity
  //   const device = await this.tvDeviceRepository.findOne({
  //     where: { id: deviceId },
  //   });
  //   if (!device) {
  //     throw new NotFoundException(`Device with ID ${deviceId} not found`);
  //   }

  //   // Fetch all related video entities
  //   const videos = await this.videoRepository.findByIds(videoIds);
  //   if (videos.length !== videoIds.length) {
  //     const missingVideoIds = videoIds.filter(
  //       (id) => !videos.some((video) => video.id === id),
  //     );
  //     throw new NotFoundException(
  //       `Videos with IDs ${missingVideoIds.join(', ')} not found`,
  //     );
  //   }

  //   // Create video assignments for each video
  //   const videoAssignments = videoIds.map((videoId) => {
  //     const video = videos.find((v) => v.id === videoId);
  //     return this.videoAssignmentRepository.create({
  //       video,
  //       device,
  //     });
  //   });

  //   // Save all video assignments in a single transaction
  //   return await this.videoAssignmentRepository.save(videoAssignments);
  // }

  async findOne(id: number): Promise<Campaigns> {
    const videoAssignment = await this.videoAssignmentRepository.findOne({
      where: { id },
      relations: ['video', 'device'],
    });

    if (!videoAssignment) {
      throw new NotFoundException(`VideoAssignment with ID ${id} not found`);
    }

    return videoAssignment;
  }

  async getAssignedCampaigns(
    userId: number,
    deviceId: number,
  ): Promise<Campaigns[]> {
    const campaigns = await this.videoAssignmentRepository.find({
      where: {
        userId, // Matches the user ID
        device: { id: deviceId }, // Matches the device ID through the device relation
      },
      relations: ['video', 'device'],
    });

    if (!campaigns.length) {
      throw new NotFoundException(
        `No campaigns found for user ID ${userId} and device ID ${deviceId}`,
      );
    }

    return campaigns;
  }

  async createMultipleAssignments(
    createVideoAssignmentDto: CreateVideoAssignmentDto,
  ): Promise<Campaigns[]> {
    const { userId, videoIds, campaignName } = createVideoAssignmentDto;

    // Fetch devices associated with the given userId
    const devices = await this.tvDeviceRepository.find({
      where: { user: { id: userId } },
    });

    if (!devices.length) {
      throw new NotFoundException(`No devices found for user ID ${userId}`);
    }

    // Fetch all video entities based on the provided video IDs
    const videos = await this.videoRepository.findByIds(videoIds);

    if (videos.length !== videoIds.length) {
      const missingVideos = videoIds.filter(
        (id) => !videos.some((video) => video.id === id),
      );
      throw new NotFoundException(
        `Videos with IDs ${missingVideos.join(', ')} not found`,
      );
    }

    // Create video assignments for the fetched devices
    const videoAssignments = devices.flatMap((device) =>
      videos.map((video) =>
        this.videoAssignmentRepository.create({
          campaignName,
          video,
          device,
          userId, // Include userId explicitly if needed
        }),
      ),
    );

    // Save all assignments in a single transaction
    return await this.videoAssignmentRepository.save(videoAssignments);
  }

  async getAllCampaigns(): Promise<Campaigns[]> {
    return this.videoAssignmentRepository.find();
  }

  async getAllCampaign(): Promise<any> {
    // Fetch all campaigns along with related user and device data
    const campaigns = await this.videoAssignmentRepository.find({
      relations: ['video', 'device', 'device.user'], // Ensure related user and device data is loaded
    });

    // Group the campaigns by deviceId
    const groupedByDeviceId = campaigns.reduce((acc, curr) => {
      const deviceId = curr.device?.id; // Access deviceId from TVDevice

      if (!deviceId) {
        return acc; // Skip if no deviceId exists
      }

      // Initialize device grouping if not yet created
      if (!acc[deviceId]) {
        acc[deviceId] = {
          deviceId,
          deviceName: curr.device.device_name, // Device name
          userName: curr.device.user, // User name (from device's user relation)
          count: 0, // Initialize count
          campaignNames: new Set<string>(), // To store unique campaign names
        };
      }

      // Increment count and add campaign name
      const deviceGroup = acc[deviceId];
      deviceGroup.count += 1;
      deviceGroup.campaignNames.add(curr.campaignName); // Ensure campaign names are unique

      return acc;
    }, {});

    // Transform the grouped result into the required format
    const result = Object.values(groupedByDeviceId).map((group: any) => ({
      campaignName: Array.from(group.campaignNames).join(', '), // Join campaign names (if multiple)
      userName: group.userName,
      count: group.count,
      deviceId: group.deviceId,
      deviceName: group.deviceName,
    }));

    return result; // Return the formatted result
  }

  async getCampaignRowsByDeviceId(deviceId: number): Promise<any> {
    // Fetch all campaigns with deviceId and related data
    const campaigns = await this.videoAssignmentRepository.find({
      where: { device: { id: deviceId } }, // Correct way to filter by deviceId using the device relation
      relations: ['video', 'device', 'device.user'], // Ensure related video, user, and device data is loaded
    });

    // Map and return the rows with desired structure
    return campaigns.map((campaign) => ({
      id: campaign.id,
      campaignName: campaign.campaignName,
      userName: campaign.device?.user,
      deviceId: campaign.device?.id,
      deviceName: campaign.device?.device_name,
      assetType: campaign.assetType,
      assignedAssetUrl: campaign.assignedAssetUrl,
      video: {
        title: campaign.video?.title,
        url: campaign.video?.url,
      },
      createdDate: campaign.createdDate,
      updatedDate: campaign.updatedDate,
    }));
  }

  async deleteCampaign(id: number): Promise<any> {
    const campaign = await this.videoAssignmentRepository.findOne({
      where: { id },
    });

    if (!campaign) {
      throw new NotFoundException(`Campaign with ID ${id} not found`);
    }
    
    const res = await this.videoAssignmentRepository.remove(campaign); // Delete the campaign
    return {res, message: 'success'}
  }

  async deleteCampaignsByDeviceId(deviceId: number): Promise<{ message: string; deletedCount: number }> {
    // Find all campaigns associated with the given device ID
    const campaigns = await this.videoAssignmentRepository.find({
      where: { device: { id: deviceId } },
      relations: ['device'],
    });
  
    if (!campaigns.length) {
      throw new NotFoundException(`No campaigns found for device ID ${deviceId}`);
    }
  
    // Remove all the campaigns associated with the device
    await this.videoAssignmentRepository.remove(campaigns);
  
    return {
      message: 'All campaigns associated with the device have been successfully deleted',
      deletedCount: campaigns.length,
    };
  }
  
}
