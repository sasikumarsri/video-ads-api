import { BaseEntity } from 'typeorm';
import { User } from './user.entity';
export declare class Session extends BaseEntity {
    id: number;
    user: User;
    session_token: string;
    expires_at: Date;
    created_at: Date;
    updated_at: Date;
}
