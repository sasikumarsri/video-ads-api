import { ApiProperty } from '@nestjs/swagger';
import { TVDevice } from 'src/entities/tv-device.entity';
import { Video } from 'src/entities/video.entity';
import {
  IsString,
  IsInt,
  IsNotEmpty,
  MaxLength,
  IsEnum,
  IsOptional,
  IsUrl,
} from 'class-validator';

export class CreateVideoAssignmentDto {
  @ApiProperty({
    example: [1, 2],
    description: 'The ID of the video to assign',
  })
  videoIds: number[] = [1, 2]; // Default videoIds if not provided

  @ApiProperty({
    example: 'Campaign 1',
    description: 'The name of the campaign',
  })
  campaignName: string = 'Campaign 1'; // Default campaign name if not provided

  @ApiProperty({
    example: 1,
    description: 'The ID of the user creating the assignment',
  })
  userId: number;

  @ApiProperty({
    example: 'active',
    description: 'The status of the campaign',
  })
  @ApiProperty({
    example: 'landscape',
    description: 'The type of asset (landscape or portrait)',
  })
  assetType: 'landscape' | 'portrait' = 'landscape'; // Default asset type

  @ApiProperty({
    example: 'https://example.com/asset.mp4',
    description: 'The URL of the assigned asset',
  })
  assignedAssetUrl?: string = ''; // Default URL if not provided
}

export class VideoAssignmentResponseDto {
  @ApiProperty({ example: 1, description: 'The ID of the video assignment' })
  id: number;

  @ApiProperty({
    type: () => Video,
    description: 'Details of the assigned video',
  })
  video: Video;

  @ApiProperty({
    type: () => TVDevice,
    description: 'Details of the assigned TV device',
  })
  device: TVDevice;

  @ApiProperty({
    example: 'Campaign 1',
    description: 'The name of the campaign',
  })
  campaignName: string;

  @ApiProperty({
    example: 'landscape',
    description: 'The asset type of the video (landscape or portrait)',
  })
  assetType: 'landscape' | 'portrait';

  @ApiProperty({
    example: 'https://example.com/asset.mp4',
    description: 'The URL of the assigned asset',
  })
  assignedAssetUrl: string;

  @ApiProperty({
    example: 'Device 1',
    description: 'The assigned device name',
  })
  assignedDevice?: string;

  @ApiProperty({
    example: '2024-11-24T00:00:00.000Z',
    description: 'The timestamp when the video assignment was created',
  })
  createdDate: Date;

  @ApiProperty({
    example: '2024-11-25T00:00:00.000Z',
    description: 'The timestamp when the video assignment was last updated',
  })
  updatedDate: Date;
}

export class VideoAssignmentsResponseDto {
  @ApiProperty({ example: 1, description: 'The ID of the video assignment' })
  id: number;

  @ApiProperty({
    type: () => Video,
    description: 'Details of the assigned video',
  })
  video: Video;

  @ApiProperty({
    type: () => TVDevice,
    description: 'Details of the assigned TV device',
  })
  device: TVDevice;

  @ApiProperty({
    example: 'Campaign 1',
    description: 'The name of the campaign',
  })
  campaignName: string;

  @ApiProperty({
    example: 'landscape',
    description: 'The asset type of the video (landscape or portrait)',
  })
  assetType: 'landscape' | 'portrait';

  @ApiProperty({
    example: 'https://example.com/asset.mp4',
    description: 'The URL of the assigned asset',
  })
  assignedAssetUrl: string;

  @ApiProperty({
    example: 'Device 1',
    description: 'The assigned device name',
  })
  assignedDevice?: string;

  @ApiProperty({
    example: '2024-11-24T00:00:00.000Z',
    description: 'The timestamp when the video assignment was created',
  })
  createdDate: Date;

  @ApiProperty({
    example: '2024-11-25T00:00:00.000Z',
    description: 'The timestamp when the video assignment was last updated',
  })
  updatedDate: Date;

  @ApiProperty({
    example: 'John Doe',
    description: 'The username of the user creating the assignment',
  })
  username?: string; // Add the username to the response
}
