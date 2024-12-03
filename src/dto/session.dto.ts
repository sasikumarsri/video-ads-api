import { IsString, IsDate, IsNotEmpty } from 'class-validator';

export class SessionResponseDto {
  @IsString()
  session_token: string;

  @IsDate()
  expires_at: Date;
}

export class CreateSessionDto {
  @IsString()
  @IsNotEmpty()
  user_id: number;
}
