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
exports.VideoAssignmentsResponseDto = exports.VideoAssignmentResponseDto = exports.CreateVideoAssignmentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const tv_device_entity_1 = require("../entities/tv-device.entity");
const video_entity_1 = require("../entities/video.entity");
const class_validator_1 = require("class-validator");
class CreateVideoAssignmentDto {
    constructor() {
        this.videoIds = [1, 2];
        this.campaignName = 'Campaign 1';
        this.assetType = 'landscape';
        this.assignedAssetUrl = '';
    }
}
exports.CreateVideoAssignmentDto = CreateVideoAssignmentDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [1, 2],
        description: 'The ID of the video to assign',
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], CreateVideoAssignmentDto.prototype, "videoIds", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Campaign 1',
        description: 'The name of the campaign',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateVideoAssignmentDto.prototype, "campaignName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The ID of the user creating the assignment',
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateVideoAssignmentDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'active',
        description: 'The status of the campaign',
    }),
    (0, swagger_1.ApiProperty)({
        example: 'landscape',
        description: 'The type of asset (landscape or portrait)',
    }),
    (0, class_validator_1.IsEnum)(['landscape', 'portrait']),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateVideoAssignmentDto.prototype, "assetType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://example.com/asset.mp4',
        description: 'The URL of the assigned asset',
    }),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.MaxLength)(2083),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVideoAssignmentDto.prototype, "assignedAssetUrl", void 0);
class VideoAssignmentResponseDto {
}
exports.VideoAssignmentResponseDto = VideoAssignmentResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'The ID of the video assignment' }),
    __metadata("design:type", Number)
], VideoAssignmentResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => video_entity_1.Video,
        description: 'Details of the assigned video',
    }),
    __metadata("design:type", video_entity_1.Video)
], VideoAssignmentResponseDto.prototype, "video", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => tv_device_entity_1.TVDevice,
        description: 'Details of the assigned TV device',
    }),
    __metadata("design:type", tv_device_entity_1.TVDevice)
], VideoAssignmentResponseDto.prototype, "device", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Campaign 1',
        description: 'The name of the campaign',
    }),
    __metadata("design:type", String)
], VideoAssignmentResponseDto.prototype, "campaignName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'landscape',
        description: 'The asset type of the video (landscape or portrait)',
    }),
    __metadata("design:type", String)
], VideoAssignmentResponseDto.prototype, "assetType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://example.com/asset.mp4',
        description: 'The URL of the assigned asset',
    }),
    __metadata("design:type", String)
], VideoAssignmentResponseDto.prototype, "assignedAssetUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Device 1',
        description: 'The assigned device name',
    }),
    __metadata("design:type", String)
], VideoAssignmentResponseDto.prototype, "assignedDevice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-11-24T00:00:00.000Z',
        description: 'The timestamp when the video assignment was created',
    }),
    __metadata("design:type", Date)
], VideoAssignmentResponseDto.prototype, "createdDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-11-25T00:00:00.000Z',
        description: 'The timestamp when the video assignment was last updated',
    }),
    __metadata("design:type", Date)
], VideoAssignmentResponseDto.prototype, "updatedDate", void 0);
class VideoAssignmentsResponseDto {
}
exports.VideoAssignmentsResponseDto = VideoAssignmentsResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'The ID of the video assignment' }),
    __metadata("design:type", Number)
], VideoAssignmentsResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => video_entity_1.Video,
        description: 'Details of the assigned video',
    }),
    __metadata("design:type", video_entity_1.Video)
], VideoAssignmentsResponseDto.prototype, "video", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => tv_device_entity_1.TVDevice,
        description: 'Details of the assigned TV device',
    }),
    __metadata("design:type", tv_device_entity_1.TVDevice)
], VideoAssignmentsResponseDto.prototype, "device", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Campaign 1',
        description: 'The name of the campaign',
    }),
    __metadata("design:type", String)
], VideoAssignmentsResponseDto.prototype, "campaignName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'landscape',
        description: 'The asset type of the video (landscape or portrait)',
    }),
    __metadata("design:type", String)
], VideoAssignmentsResponseDto.prototype, "assetType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'https://example.com/asset.mp4',
        description: 'The URL of the assigned asset',
    }),
    __metadata("design:type", String)
], VideoAssignmentsResponseDto.prototype, "assignedAssetUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Device 1',
        description: 'The assigned device name',
    }),
    __metadata("design:type", String)
], VideoAssignmentsResponseDto.prototype, "assignedDevice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-11-24T00:00:00.000Z',
        description: 'The timestamp when the video assignment was created',
    }),
    __metadata("design:type", Date)
], VideoAssignmentsResponseDto.prototype, "createdDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-11-25T00:00:00.000Z',
        description: 'The timestamp when the video assignment was last updated',
    }),
    __metadata("design:type", Date)
], VideoAssignmentsResponseDto.prototype, "updatedDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'John Doe',
        description: 'The username of the user creating the assignment',
    }),
    __metadata("design:type", String)
], VideoAssignmentsResponseDto.prototype, "username", void 0);
//# sourceMappingURL=video-assignment.dto.js.map