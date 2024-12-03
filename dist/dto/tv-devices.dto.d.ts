export declare class TVDeviceResponseDto {
    id: number;
    device_name: string;
    is_online: boolean;
    last_seen: Date;
    updated_at: Date;
    user_id: number;
}
export declare class UpdateTVDeviceDto {
    device_name?: string;
    is_online?: boolean;
}
export declare class CreateTVDeviceDto {
    device_name: string;
    user_id: number;
}
