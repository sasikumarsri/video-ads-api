import { BaseEntity } from 'typeorm';
import { TVDevice } from './tv-device.entity';
export declare enum LogAction {
    URL_OPENED = "URL_OPENED",
    BROWSER_CLOSED = "BROWSER_CLOSED",
    POWER_OFF = "POWER_OFF"
}
export declare class Log extends BaseEntity {
    id: number;
    device: TVDevice;
    action: LogAction;
    details: string;
    created_at: Date;
}
