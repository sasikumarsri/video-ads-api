import { BaseEntity } from 'typeorm';
import { User } from './user.entity';
export declare class TVDevice extends BaseEntity {
    id: number;
    device_name: string;
    user: User;
    is_online: boolean;
    last_seen: Date;
    updated_at: Date;
}
