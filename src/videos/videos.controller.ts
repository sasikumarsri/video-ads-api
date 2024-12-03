import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { VideosService } from './videos.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import {
  CreateVideoDto,
  UpdateVideoDto,
  VideoResponseDto,
} from 'src/dto/videos.dto';

@ApiTags('videos')
@Controller('videos')
export class VideosController {
  constructor(private readonly videoService: VideosService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new video' })
  @ApiResponse({
    status: 201,
    description: 'The video has been successfully created.',
    type: VideoResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async create(
    @Body() createVideoDto: CreateVideoDto,
  ): Promise<VideoResponseDto> {
    const video = await this.videoService.create(createVideoDto);
    return {
      id: video.id,
      title: video.title,
      description: video.description,
      url: video.url,
      thumbnail_url: video.thumbnail_url,
      duration: video.duration,
      created_at: video.created_at,
      updated_at: video.updated_at,
    };
  }

  @Get()
  @ApiOperation({ summary: 'Get all videos' })
  @ApiResponse({
    status: 200,
    description: 'List of videos.',
    type: [VideoResponseDto],
  })
  async findAll(): Promise<VideoResponseDto[]> {
    const videos = await this.videoService.findAll();
    return videos.map((video) => ({
      id: video.id,
      title: video.title,
      description: video.description,
      url: video.url,
      thumbnail_url: video.thumbnail_url,
      duration: video.duration,
      created_at: video.created_at,
      updated_at: video.updated_at,
    }));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a video by ID' })
  @ApiParam({ name: 'id', description: 'ID of the video to retrieve' })
  @ApiResponse({
    status: 200,
    description: 'The video has been successfully retrieved.',
    type: VideoResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Video not found.' })
  async findOne(@Param('id') id: number): Promise<VideoResponseDto> {
    const video = await this.videoService.findOne(id);
    return {
      id: video.id,
      title: video.title,
      description: video.description,
      url: video.url,
      thumbnail_url: video.thumbnail_url,
      duration: video.duration,
      created_at: video.created_at,
      updated_at: video.updated_at,
    };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a video by ID' })
  @ApiParam({ name: 'id', description: 'ID of the video to update' })
  @ApiResponse({
    status: 200,
    description: 'The video has been successfully updated.',
    type: VideoResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Video not found.' })
  async update(
    @Param('id') id: number,
    @Body() updateVideoDto: UpdateVideoDto,
  ): Promise<VideoResponseDto> {
    const video = await this.videoService.update(id, updateVideoDto);
    return {
      id: video.id,
      title: video.title,
      description: video.description,
      url: video.url,
      thumbnail_url: video.thumbnail_url,
      duration: video.duration,
      created_at: video.created_at,
      updated_at: video.updated_at,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a video by ID' })
  @ApiParam({ name: 'id', description: 'ID of the video to delete' })
  @ApiResponse({
    status: 200,
    description: 'The video has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Video not found.' })
  async remove(@Param('id') id: number): Promise<void> {
    await this.videoService.remove(id);
  }
}
