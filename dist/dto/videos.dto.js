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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoResponseDto = exports.UpdateVideoDto = exports.CreateVideoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateVideoDto {
}
exports.CreateVideoDto = CreateVideoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Video Title', description: 'Title of the video' }),
    __metadata("design:type", String)
], CreateVideoDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'This is a description of the video',
        description: 'Description of the video',
    }),
    __metadata("design:type", String)
], CreateVideoDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://example.com/video.mp4',
        description: 'URL of the video',
    }),
    __metadata("design:type", String)
], CreateVideoDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://example.com/thumbnail.jpg',
        description: 'Thumbnail URL of the video',
    }),
    __metadata("design:type", String)
], CreateVideoDto.prototype, "thumbnail_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 120,
        description: 'Duration of the video in seconds',
    }),
    __metadata("design:type", Number)
], CreateVideoDto.prototype, "duration", void 0);
class UpdateVideoDto {
}
exports.UpdateVideoDto = UpdateVideoDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Updated Video Title',
        description: 'Updated title of the video',
    }),
    __metadata("design:type", String)
], UpdateVideoDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Updated description',
        description: 'Updated description of the video',
    }),
    __metadata("design:type", String)
], UpdateVideoDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'https://example.com/updated-video.mp4',
        description: 'Updated URL of the video',
    }),
    __metadata("design:type", String)
], UpdateVideoDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 'https://example.com/updated-thumbnail.jpg',
        description: 'Updated thumbnail URL of the video',
    }),
    __metadata("design:type", String)
], UpdateVideoDto.prototype, "thumbnail_url", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: 150,
        description: 'Updated duration of the video in seconds',
    }),
    __metadata("design:type", Number)
], UpdateVideoDto.prototype, "duration", void 0);
class VideoResponseDto {
}
exports.VideoResponseDto = VideoResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID of the video' }),
    __metadata("design:type", Number)
], VideoResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Video Title', description: 'Title of the video' }),
    __metadata("design:type", String)
], VideoResponseDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'This is a description of the video',
        description: 'Description of the video',
    }),
    __metadata("design:type", String)
], VideoResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://example.com/video.mp4',
        description: 'URL of the video',
    }),
    __metadata("design:type", String)
], VideoResponseDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://example.com/thumbnail.jpg',
        description: 'Thumbnail URL of the video',
    }),
    __metadata("design:type", String)
], VideoResponseDto.prototype, "thumbnail_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 120,
        description: 'Duration of the video in seconds',
    }),
    __metadata("design:type", Number)
], VideoResponseDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-11-24T00:00:00.000Z',
        description: 'Creation timestamp of the video',
    }),
    __metadata("design:type", Date)
], VideoResponseDto.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-11-24T00:00:00.000Z',
        description: 'Last updated timestamp of the video',
    }),
    __metadata("design:type", Date)
], VideoResponseDto.prototype, "updated_at", void 0);
//# sourceMappingURL=videos.dto.js.map