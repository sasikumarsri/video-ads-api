import { Repository } from 'typeorm';
import { TVDevice } from 'src/entities/tv-device.entity';
import { CreateTVDeviceDto, UpdateTVDeviceDto } from 'src/dto/tv-devices.dto';
export declare class TVDevicesService {
    private readonly tvDeviceRepository;
    constructor(tvDeviceRepository: Repository<TVDevice>);
    create(createTVDeviceDto: CreateTVDeviceDto): Promise<TVDevice>;
    findAll(): Promise<TVDevice[]>;
    findOne(id: number): Promise<TVDevice>;
    update(id: number, updateTVDeviceDto: UpdateTVDeviceDto): Promise<TVDevice>;
    remove(id: number): Promise<void>;
    getDevicesByUserId(id: number): Promise<any>;
}
