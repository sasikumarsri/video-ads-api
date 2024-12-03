import { BaseEntity } from 'typeorm';
import { Video } from './video.entity';
import { TVDevice } from './tv-device.entity';
export declare class Campaigns extends BaseEntity {
    id: number;
    campaignName: string;
    userId: number;
    createdDate: Date;
    updatedDate: Date;
    assetType: 'landscape' | 'portrait';
    assignedAssetUrl: string;
    video: Video;
    device: TVDevice;
}
