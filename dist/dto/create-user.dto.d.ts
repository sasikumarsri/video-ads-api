import { UserRole } from 'src/entities/user.entity';
export declare class CreateUserDto {
    username: string;
    password: string;
    role: UserRole;
}
export declare class UserResponseDto {
    id: number;
    username: string;
    role: UserRole;
}
