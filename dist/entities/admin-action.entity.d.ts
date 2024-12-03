import { BaseEntity } from 'typeorm';
import { User } from './user.entity';
export declare class AdminAction extends BaseEntity {
    id: number;
    admin: User;
    action: string;
    target: string;
    created_at: Date;
}
