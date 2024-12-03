import { TVDevicesService } from './tv-devices.service';
import { CreateTVDeviceDto, UpdateTVDeviceDto } from 'src/dto/tv-devices.dto';
export declare class TVDevicesController {
    private readonly tvDevicesService;
    constructor(tvDevicesService: TVDevicesService);
    create(createTVDeviceDto: CreateTVDeviceDto): Promise<import("../entities/tv-device.entity").TVDevice>;
    findAll(): Promise<import("../entities/tv-device.entity").TVDevice[]>;
    findOne(id: number): Promise<import("../entities/tv-device.entity").TVDevice>;
    update(id: number, updateTVDeviceDto: UpdateTVDeviceDto): Promise<import("../entities/tv-device.entity").TVDevice>;
    remove(id: number): Promise<void>;
    getDeviceByUserId(id: number): Promise<any>;
}
