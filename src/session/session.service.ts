import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import { Session } from 'src/entities/session.entity';
import { User } from 'src/entities/user.entity';

@Injectable()
export class SessionService {
  private readonly jwtSecret = 'your_jwt_secret_key';

  constructor(
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>, // Inject SessionRepository
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, // Inject UserRepository
  ) {}

  // Create a new session for a user
  async createSession(userId: number): Promise<Session> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found');
    }

    const sessionToken = jwt.sign(
      { userId: user.id, username: user.username },
      this.jwtSecret,
      {
        expiresIn: '1h',
      },
    );

    const newSession = this.sessionRepository.create({
      user,
      session_token: sessionToken,
      expires_at: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
    });

    return this.sessionRepository.save(newSession);
  }

  // Validate an existing session (check if the token is valid)
  async validateSession(sessionToken: string): Promise<Session | null> {
    try {
      const decoded = jwt.verify(sessionToken, this.jwtSecret) as any;
      const session = await this.sessionRepository.findOne({
        where: { session_token: sessionToken },
      });

      if (session && session.expires_at > new Date()) {
        return session;
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  // Delete a session
  async deleteSession(sessionToken: string): Promise<void> {
    const session = await this.sessionRepository.findOne({
      where: { session_token: sessionToken },
    });
    if (session) {
      await this.sessionRepository.remove(session);
    }
  }
}
