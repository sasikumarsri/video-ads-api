import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  HttpCode,
  HttpStatus,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { CampainsService } from './campaigns.service';
import {
  CreateVideoAssignmentDto,
  VideoAssignmentResponseDto,
} from 'src/dto/video-assignment.dto';
import { Logger } from '@nestjs/common';
import { Campaigns } from 'src/entities/campaigns.entity';
@ApiTags('Video Assignments')
@Controller('video-assignments')
export class CampaignsController {
  constructor(private readonly CampainsService: CampainsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: 201,
    description: 'The video assignments have been successfully created.',
    type: [VideoAssignmentResponseDto], // Indicating an array of response DTOs
  })
  // async create(
  //   @Body() createVideoAssignmentDto: CreateVideoAssignmentDto,
  // ): Promise<VideoAssignmentResponseDto[]> {
  //   Logger.log(
  //     `Creating video assignments for deviceId: ${createVideoAssignmentDto.deviceId}`,
  //   );

  //   return await this.CampainsService.create(createVideoAssignmentDto);
  // }
  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Returns the details of a video assignment.',
    type: VideoAssignmentResponseDto,
  })
  async findOne(@Param('id') id: number): Promise<VideoAssignmentResponseDto> {
    return await this.CampainsService.findOne(id);
  }
  @Get('getDeviceCampaigns/:userId/:deviceId')
  @ApiResponse({
    status: 200,
    description:
      'Returns the details of the campaigns assigned to a user and device.',
  })
  async getAssignedCampaigns(
    @Param('userId') userId: number,
    @Param('deviceId') deviceId: number,
  ): Promise<any> {
    Logger.log(
      `Fetching campaigns for userId: ${userId}, deviceId: ${deviceId}`,
    );
    return await this.CampainsService.getAssignedCampaigns(userId, deviceId);
  }

  @Post('create')
  @ApiResponse({
    status: 201,
    description: 'Video assignments created successfully.',
  })
  async createAssignments(
    @Body() createVideoAssignmentDto: CreateVideoAssignmentDto,
  ): Promise<Campaigns[]> {
    const { userId, videoIds } = createVideoAssignmentDto;
    return await this.CampainsService.createMultipleAssignments(
      createVideoAssignmentDto,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Get all Campaigns' })
  @ApiResponse({ status: 200, type: [VideoAssignmentResponseDto] })
  async getAllCampaign() {
    const campaigns = await this.CampainsService.getAllCampaign();
    return campaigns;
  }

  @Get(':deviceId/rows')
  @ApiOperation({ summary: 'Get all rows for a specific device by device ID' })
  @ApiResponse({
    status: 200,
    type: [VideoAssignmentResponseDto], // Adjust the response type as necessary
    description: 'List of rows for the specified device',
  })
  async getCampaignRowsByDeviceId(@Param('deviceId') deviceId: number) {
    const rows = await this.CampainsService.getCampaignRowsByDeviceId(deviceId);
    return rows;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a campaign by ID' })
  @ApiResponse({ status: 200, description: 'Campaign deleted successfully' })
  @ApiResponse({ status: 404, description: 'Campaign not found' })
  async deleteCampaign(@Param('id') id: number): Promise<void> {
    await this.CampainsService.deleteCampaign(id);
  }
}
