import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Video } from 'src/entities/video.entity';
import { CreateVideoDto, UpdateVideoDto } from 'src/dto/videos.dto';

@Injectable()
export class VideosService {
  constructor(
    @InjectRepository(Video)
    private readonly videoRepository: Repository<Video>,
  ) {}

  async create(createVideoDto: CreateVideoDto): Promise<Video> {
    const video = this.videoRepository.create(createVideoDto);
    return await this.videoRepository.save(video);
  }

  async findAll(): Promise<Video[]> {
    return await this.videoRepository.find();
  }

  async findOne(id: number): Promise<Video> {
    return await this.videoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateVideoDto: UpdateVideoDto): Promise<Video> {
    await this.videoRepository.update(id, updateVideoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.videoRepository.delete(id);
  }
}
