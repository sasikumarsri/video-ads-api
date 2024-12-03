import { Repository } from 'typeorm';
import { User, UserRole } from 'src/entities/user.entity';
import { TVDevice } from 'src/entities/tv-device.entity';
export declare class UserService {
    private userRepository;
    private tvDeviceRepository;
    private readonly jwtSecret;
    constructor(userRepository: Repository<User>, tvDeviceRepository: Repository<TVDevice>);
    getDeviceId: () => Promise<string>;
    create(username: string, password: string, role: UserRole): Promise<User>;
    login(username: string, password: string, deviceId: number): Promise<any>;
    findOneById(id: number): Promise<User>;
    getAllUsers(): Promise<User[]>;
}
