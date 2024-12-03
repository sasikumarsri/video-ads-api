import { VideosService } from './videos.service';
import { CreateVideoDto, UpdateVideoDto, VideoResponseDto } from 'src/dto/videos.dto';
export declare class VideosController {
    private readonly videoService;
    constructor(videoService: VideosService);
    create(createVideoDto: CreateVideoDto): Promise<VideoResponseDto>;
    findAll(): Promise<VideoResponseDto[]>;
    findOne(id: number): Promise<VideoResponseDto>;
    update(id: number, updateVideoDto: UpdateVideoDto): Promise<VideoResponseDto>;
    remove(id: number): Promise<void>;
}
