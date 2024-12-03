export declare class CreateVideoDto {
    title: string;
    description: string;
    url: string;
    thumbnail_url: string;
    duration: number;
}
export declare class UpdateVideoDto {
    title?: string;
    description?: string;
    url?: string;
    thumbnail_url?: string;
    duration?: number;
}
export declare class VideoResponseDto {
    id: number;
    title: string;
    description: string;
    url: string;
    thumbnail_url: string;
    duration: number;
    created_at: Date;
    updated_at: Date;
}
