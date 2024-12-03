
export class SessionResponseDto {
  session_token: string;

  expires_at: Date;
}

export class CreateSessionDto {
  user_id: number;
}
