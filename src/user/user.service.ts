import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { User, UserRole } from 'src/entities/user.entity';
import { TVDevice } from 'src/entities/tv-device.entity';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
@Injectable()
export class UserService {
  private readonly jwtSecret = 'your_jwt_secret_key';

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(TVDevice)
    private tvDeviceRepository: Repository<TVDevice>,
  ) {}
  getDeviceId = async () => {
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    return result.visitorId;
  };

  async create(
    username: string,
    password: string,
    role: UserRole,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.userRepository.create({
      username,
      password: hashedPassword,
      role,
    });
    return this.userRepository.save(newUser);
  }

  async login(
    username: string,
    password: string,
    deviceId: number,
  ): Promise<any> {
    // Find the user by username
    const user = await this.userRepository.findOne({ where: { username } });

    // Check if user exists
    if (!user) {
      throw new ForbiddenException('Invalid credentials');
    }

    // Verify the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new ForbiddenException('Invalid credentials');
    }

    // Handle device record
    let device = await this.tvDeviceRepository.findOne({
      where: { user: { id: user.id }, id: deviceId },
    });

    if (device) {
      // Device exists, update the last seen time and mark as online
      device.last_seen = new Date();
      device.is_online = true;
      await this.tvDeviceRepository.save(device);
    } else {
      // Device doesn't exist, create a new record
      const newDevice = this.tvDeviceRepository.create({
        device_name: 'test device' + new Date().toISOString(),
        user: { id: user.id }, // Associate the device with the user
        is_online: true,
        last_seen: new Date(),
      });
      device = await this.tvDeviceRepository.save(newDevice);
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, username: user.username, role: user.role },
      this.jwtSecret,
      { expiresIn: '1h' },
    );

    const data = {
      token,
      userName: user.username,
      id: user.id,
      role: user.role,
      deviceId: device.id,
    };

    // Return the token and device ID
    return { message: 'Login successful', data };
  }

  async findOneById(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
