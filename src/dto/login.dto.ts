import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'Admin', description: 'The username of the user' })
  username: string;

  @ApiProperty({
    example: 'Test@123',
    description: 'The password of the user',
  })
  password: string;

  deviceId?: number;
}

export class LoginResponseDto {
  @ApiProperty({ example: 'Login successful', description: 'Response message' })
  message: string;

  @ApiProperty({ example: 'jwt_token_here', description: 'JWT token' })
  token: string;
}
