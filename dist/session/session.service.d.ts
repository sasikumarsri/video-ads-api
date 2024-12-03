import { Repository } from 'typeorm';
import { Session } from 'src/entities/session.entity';
import { User } from 'src/entities/user.entity';
export declare class SessionService {
    private readonly sessionRepository;
    private readonly userRepository;
    private readonly jwtSecret;
    constructor(sessionRepository: Repository<Session>, userRepository: Repository<User>);
    createSession(userId: number): Promise<Session>;
    validateSession(sessionToken: string): Promise<Session | null>;
    deleteSession(sessionToken: string): Promise<void>;
}
