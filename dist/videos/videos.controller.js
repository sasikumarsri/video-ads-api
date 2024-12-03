"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideosController = void 0;
const common_1 = require("@nestjs/common");
const videos_service_1 = require("./videos.service");
const swagger_1 = require("@nestjs/swagger");
const videos_dto_1 = require("../dto/videos.dto");
let VideosController = class VideosController {
    constructor(videoService) {
        this.videoService = videoService;
    }
    async create(createVideoDto) {
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
    async findAll() {
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
    async findOne(id) {
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
    async update(id, updateVideoDto) {
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
    async remove(id) {
        await this.videoService.remove(id);
    }
};
exports.VideosController = VideosController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new video' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The video has been successfully created.',
        type: videos_dto_1.VideoResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [videos_dto_1.CreateVideoDto]),
    __metadata("design:returntype", Promise)
], VideosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all videos' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of videos.',
        type: [videos_dto_1.VideoResponseDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VideosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a video by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID of the video to retrieve' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The video has been successfully retrieved.',
        type: videos_dto_1.VideoResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Video not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VideosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a video by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID of the video to update' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The video has been successfully updated.',
        type: videos_dto_1.VideoResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Video not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, videos_dto_1.UpdateVideoDto]),
    __metadata("design:returntype", Promise)
], VideosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a video by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID of the video to delete' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The video has been successfully deleted.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Video not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VideosController.prototype, "remove", null);
exports.VideosController = VideosController = __decorate([
    (0, swagger_1.ApiTags)('videos'),
    (0, common_1.Controller)('videos'),
    __metadata("design:paramtypes", [videos_service_1.VideosService])
], VideosController);
//# sourceMappingURL=videos.controller.js.map