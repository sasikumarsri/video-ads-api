import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './entities/user.entity';
import { Campaigns } from './entities/campaigns.entity';
import { AdminAction } from './entities/admin-action.entity';
import { Log } from './entities/log.entity';
import { TVDevice } from './entities/tv-device.entity';
import { Video } from './entities/video.entity';
import { Session } from './entities/session.entity';
import { SessionModule } from './session/session.module';
import { VideosModule } from './videos/videos.module';
import { TVDevicesModule } from './tv-devices/tv-devices.module';
import { CampaignsModule } from './campaigns/campaigns.module';

@Module({
  imports: [
    // Load configuration from .env
    ConfigModule.forRoot({
      isGlobal: true, // Make the configuration available globally
    }),

    // TypeOrmModule configuration
    TypeOrmModule.forRoot({
      type: 'mysql', // Database type
      host: process.env.DB_HOST || '127.0.0.1', // DB Host
      port: process.env.DB_PORT || 3306, // DB Port
      username: process.env.DB_USERNAME || 'root', // DB Username
      password: process.env.DB_PASSWORD || '', // DB Password
      database: process.env.DB_NAME || 'defaultdb', // Database name
      entities: [User, Session, Video, TVDevice, Log, AdminAction, Campaigns],
      synchronize: true, // Auto sync schema (don't use in production)
      logging: true, // Enable logging
    }),

    // Your modules
    UserModule,
    AuthModule,
    SessionModule,
    VideosModule,
    CampaignsModule,
    TVDevicesModule,
  ],
})
export class AppModule {}
