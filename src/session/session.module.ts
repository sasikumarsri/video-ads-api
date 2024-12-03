import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { User } from 'src/entities/user.entity';
import { Session } from 'src/entities/session.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Session, User])], // Register Session and User entities
  providers: [SessionService],
  controllers: [SessionController],
})
export class SessionModule {}
