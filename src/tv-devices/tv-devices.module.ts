import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TVDevice } from 'src/entities/tv-device.entity';
import { TVDevicesService } from './tv-devices.service';
import { TVDevicesController } from './tv-devices.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TVDevice])],
  controllers: [TVDevicesController],
  providers: [TVDevicesService],
})
export class TVDevicesModule {}
