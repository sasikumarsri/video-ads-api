import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateVideoDto {
  @ApiProperty({ example: 'Video Title', description: 'Title of the video' })
  title: string;

  @ApiProperty({
    example: 'This is a description of the video',
    description: 'Description of the video',
  })
  description: string;

  @ApiProperty({
    example: 'https://example.com/video.mp4',
    description: 'URL of the video',
  })
  url: string;

  @ApiProperty({
    example: 'https://example.com/thumbnail.jpg',
    description: 'Thumbnail URL of the video',
  })
  thumbnail_url: string;

  @ApiProperty({
    example: 120,
    description: 'Duration of the video in seconds',
  })
  duration: number;
}

export class UpdateVideoDto {
  @ApiPropertyOptional({
    example: 'Updated Video Title',
    description: 'Updated title of the video',
  })
  title?: string;

  @ApiPropertyOptional({
    example: 'Updated description',
    description: 'Updated description of the video',
  })
  description?: string;

  @ApiPropertyOptional({
    example: 'https://example.com/updated-video.mp4',
    description: 'Updated URL of the video',
  })
  url?: string;

  @ApiPropertyOptional({
    example: 'https://example.com/updated-thumbnail.jpg',
    description: 'Updated thumbnail URL of the video',
  })
  thumbnail_url?: string;

  @ApiPropertyOptional({
    example: 150,
    description: 'Updated duration of the video in seconds',
  })
  duration?: number;
}

export class VideoResponseDto {
  @ApiProperty({ example: 1, description: 'ID of the video' })
  id: number;

  @ApiProperty({ example: 'Video Title', description: 'Title of the video' })
  title: string;

  @ApiProperty({
    example: 'This is a description of the video',
    description: 'Description of the video',
  })
  description: string;

  @ApiProperty({
    example: 'https://example.com/video.mp4',
    description: 'URL of the video',
  })
  url: string;

  @ApiProperty({
    example: 'https://example.com/thumbnail.jpg',
    description: 'Thumbnail URL of the video',
  })
  thumbnail_url: string;

  @ApiProperty({
    example: 120,
    description: 'Duration of the video in seconds',
  })
  duration: number;

  @ApiProperty({
    example: '2024-11-24T00:00:00.000Z',
    description: 'Creation timestamp of the video',
  })
  created_at: Date;

  @ApiProperty({
    example: '2024-11-24T00:00:00.000Z',
    description: 'Last updated timestamp of the video',
  })
  updated_at: Date;
}
