import { TVDevice } from 'src/entities/tv-device.entity';
import { Video } from 'src/entities/video.entity';
export declare class CreateVideoAssignmentDto {
    videoIds: number[];
    campaignName: string;
    userId: number;
    assetType: 'landscape' | 'portrait';
    assignedAssetUrl?: string;
}
export declare class VideoAssignmentResponseDto {
    id: number;
    video: Video;
    device: TVDevice;
    campaignName: string;
    assetType: 'landscape' | 'portrait';
    assignedAssetUrl: string;
    assignedDevice?: string;
    createdDate: Date;
    updatedDate: Date;
}
export declare class VideoAssignmentsResponseDto {
    id: number;
    video: Video;
    device: TVDevice;
    campaignName: string;
    assetType: 'landscape' | 'portrait';
    assignedAssetUrl: string;
    assignedDevice?: string;
    createdDate: Date;
    updatedDate: Date;
    username?: string;
}
