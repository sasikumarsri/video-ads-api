import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampainsService } from './campaigns.service';
import { CampaignsController } from './campaigns.controller';
import { Campaigns } from 'src/entities/campaigns.entity';
import { Video } from 'src/entities/video.entity';
import { TVDevice } from 'src/entities/tv-device.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Campaigns, Video, TVDevice])],
  providers: [CampainsService],
  controllers: [CampaignsController],
})
export class CampaignsModule {}
