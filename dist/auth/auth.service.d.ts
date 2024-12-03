import { UserService } from '../user/user.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtSecret;
    constructor(userService: UserService);
    validateToken(token: string): any;
}
