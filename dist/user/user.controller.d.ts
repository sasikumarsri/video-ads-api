import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { LoginDto, LoginResponseDto } from 'src/dto/login.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<User>;
    login(loginDto: LoginDto): Promise<LoginResponseDto>;
    getAllUsers(): Promise<User[]>;
    findOneById(id: number): Promise<User>;
}
