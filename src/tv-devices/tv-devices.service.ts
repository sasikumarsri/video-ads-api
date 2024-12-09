import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TVDevice } from 'src/entities/tv-device.entity';
import { CreateTVDeviceDto, UpdateStatusDto, UpdateTVDeviceDto } from 'src/dto/tv-devices.dto';

@Injectable()
export class TVDevicesService {
  constructor(
    @InjectRepository(TVDevice)
    private readonly tvDeviceRepository: Repository<TVDevice>,
  ) {}

  async create(createTVDeviceDto: CreateTVDeviceDto): Promise<TVDevice> {
    const device = this.tvDeviceRepository.create({
      ...createTVDeviceDto,
      user: { id: createTVDeviceDto.user_id },
    });
    return this.tvDeviceRepository.save(device);
  }

  async findAll(): Promise<TVDevice[]> {
    return this.tvDeviceRepository.find({ relations: ['user'] });
  }

  async findOne(id: number): Promise<TVDevice> {
    const device = await this.tvDeviceRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    if (!device) throw new NotFoundException(`Device with ID ${id} not found`);
    return device;
  }

  async update(
    id: number,
    updateTVDeviceDto: UpdateTVDeviceDto,
  ): Promise<TVDevice> {
    const device = await this.findOne(id);
    Object.assign(device, updateTVDeviceDto);
    return this.tvDeviceRepository.save(device);
  }

  async remove(id: number): Promise<void> {
    const device = await this.findOne(id);
    await this.tvDeviceRepository.remove(device);
  }

  async getDevicesByUserId(id: number): Promise<any> {
    const data = await this.tvDeviceRepository.find({
      where: { user: { id } },
    });
    return data;
  }

  async updateDeviceStatus(updateStatusDto: UpdateStatusDto): Promise<void> {
    const { deviceId, isOnline, lastSeen } = updateStatusDto;

    // Fetch the TVDevice entity
    const tvDevice = await TVDevice.findOne({ where: { id: deviceId } });

    if (tvDevice) {
      // Update the entity
      tvDevice.is_online = isOnline;
      tvDevice.last_seen = new Date(lastSeen);
      await tvDevice.save();
    }
  }
}
