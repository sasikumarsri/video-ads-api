import { SessionService } from './session.service';
import { CreateSessionDto, SessionResponseDto } from 'src/dto/session.dto';
export declare class SessionController {
    private readonly sessionService;
    constructor(sessionService: SessionService);
    createSession(createSessionDto: CreateSessionDto): Promise<SessionResponseDto>;
    validateSession(sessionToken: string): Promise<SessionResponseDto>;
    deleteSession(sessionToken: string): Promise<void>;
}
