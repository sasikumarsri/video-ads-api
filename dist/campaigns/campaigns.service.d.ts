import { Repository } from 'typeorm';
import { Campaigns } from 'src/entities/campaigns.entity';
import { Video } from 'src/entities/video.entity';
import { TVDevice } from 'src/entities/tv-device.entity';
import { CreateVideoAssignmentDto } from 'src/dto/video-assignment.dto';
export declare class CampainsService {
    private readonly videoAssignmentRepository;
    private readonly videoRepository;
    private readonly tvDeviceRepository;
    constructor(videoAssignmentRepository: Repository<Campaigns>, videoRepository: Repository<Video>, tvDeviceRepository: Repository<TVDevice>);
    findOne(id: number): Promise<Campaigns>;
    getAssignedCampaigns(userId: number, deviceId: number): Promise<Campaigns[]>;
    createMultipleAssignments(createVideoAssignmentDto: CreateVideoAssignmentDto): Promise<Campaigns[]>;
    getAllCampaigns(): Promise<Campaigns[]>;
    getAllCampaign(): Promise<any>;
    getCampaignRowsByDeviceId(deviceId: number): Promise<any>;
    deleteCampaign(id: number): Promise<void>;
}
