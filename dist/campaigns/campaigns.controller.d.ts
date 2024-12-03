import { CampainsService } from './campaigns.service';
import { CreateVideoAssignmentDto, VideoAssignmentResponseDto } from 'src/dto/video-assignment.dto';
import { Campaigns } from 'src/entities/campaigns.entity';
export declare class CampaignsController {
    private readonly CampainsService;
    constructor(CampainsService: CampainsService);
    findOne(id: number): Promise<VideoAssignmentResponseDto>;
    getAssignedCampaigns(userId: number, deviceId: number): Promise<any>;
    createAssignments(createVideoAssignmentDto: CreateVideoAssignmentDto): Promise<Campaigns[]>;
    getAllCampaign(): Promise<any>;
    getCampaignRowsByDeviceId(deviceId: number): Promise<any>;
    deleteCampaign(id: number): Promise<void>;
}
