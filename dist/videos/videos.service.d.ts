import { Repository } from 'typeorm';
import { Video } from 'src/entities/video.entity';
import { CreateVideoDto, UpdateVideoDto } from 'src/dto/videos.dto';
export declare class VideosService {
    private readonly videoRepository;
    constructor(videoRepository: Repository<Video>);
    create(createVideoDto: CreateVideoDto): Promise<Video>;
    findAll(): Promise<Video[]>;
    findOne(id: number): Promise<Video>;
    update(id: number, updateVideoDto: UpdateVideoDto): Promise<Video>;
    remove(id: number): Promise<void>;
}
