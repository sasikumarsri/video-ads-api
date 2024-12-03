import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { SessionService } from './session.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateSessionDto, SessionResponseDto } from 'src/dto/session.dto';

@ApiTags('sessions') // Define the tag for grouping the session routes in Swagger UI
@Controller('sessions')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new session (login)' })
  @ApiResponse({
    status: 201,
    description: 'Session created successfully.',
    type: SessionResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Invalid credentials.' })
  async createSession(
    @Body() createSessionDto: CreateSessionDto,
  ): Promise<SessionResponseDto> {
    const { user_id } = createSessionDto;

    try {
      const session = await this.sessionService.createSession(user_id);
      return {
        session_token: session.session_token,
        expires_at: session.expires_at,
      };
    } catch (error) {
      throw new BadRequestException('Invalid credentials');
    }
  }

  @Post('validate')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Validate a session (check if the token is still valid)',
  })
  @ApiResponse({ status: 200, description: 'Session is valid.' })
  @ApiResponse({
    status: 400,
    description: 'Invalid or expired session token.',
  })
  async validateSession(
    @Body() sessionToken: string,
  ): Promise<SessionResponseDto> {
    const session = await this.sessionService.validateSession(sessionToken);
    if (!session) {
      throw new BadRequestException('Invalid or expired session token');
    }
    return {
      session_token: session.session_token,
      expires_at: session.expires_at,
    };
  }

  @Post('delete')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a session (logout)' })
  @ApiResponse({ status: 204, description: 'Session deleted successfully.' })
  @ApiResponse({
    status: 400,
    description: 'Session token not found or invalid.',
  })
  async deleteSession(@Body() sessionToken: string): Promise<void> {
    try {
      await this.sessionService.deleteSession(sessionToken);
    } catch (error) {
      throw new BadRequestException('Session token not found or invalid');
    }
  }
}
