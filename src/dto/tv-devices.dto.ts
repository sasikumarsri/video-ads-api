import { ApiProperty } from '@nestjs/swagger';

export class TVDeviceResponseDto {
  @ApiProperty({ example: 1, description: 'The ID of the device' })
  id: number;

  @ApiProperty({
    example: 'Living Room TV',
    description: 'The name of the device',
  })
  device_name: string;

  @ApiProperty({ example: true, description: 'Whether the device is online' })
  is_online: boolean;

  @ApiProperty({
    example: '2024-11-24T12:00:00Z',
    description: 'The timestamp of the last time the device was seen online',
  })
  last_seen: Date;

  @ApiProperty({
    example: '2024-11-24T12:00:00Z',
    description: 'The timestamp of when the device was last updated',
  })
  updated_at: Date;

  @ApiProperty({
    example: 1,
    description: 'The ID of the user associated with this device',
  })
  user_id: number;
}

export class UpdateTVDeviceDto {
  @ApiProperty({
    example: 'Bedroom TV',
    description: 'The updated name of the device',
  })
  device_name?: string;

  @ApiProperty({
    example: false,
    description: 'The updated online status of the device',
  })
  is_online?: boolean;
}

export class CreateTVDeviceDto {
  @ApiProperty({
    example: 'Living Room TV',
    description: 'The name of the device',
  })
  device_name: string;

  @ApiProperty({
    example: 1,
    description: 'The ID of the user associated with this device',
  })
  user_id: number;
}
