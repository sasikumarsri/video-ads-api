import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from '../entities/user.entity';
import { AuthModule } from '../auth/auth.module';
import { TVDevice } from 'src/entities/tv-device.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, TVDevice]), // Import User entity
    forwardRef(() => AuthModule), // Resolve circular dependency
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService], // Export UserService for use in AuthModule
})
export class UserModule {}
