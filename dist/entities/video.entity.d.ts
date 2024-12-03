import { BaseEntity } from 'typeorm';
export declare class Video extends BaseEntity {
    id: number;
    title: string;
    description: string;
    url: string;
    thumbnail_url: string;
    duration: number;
    created_at: Date;
    updated_at: Date;
}
