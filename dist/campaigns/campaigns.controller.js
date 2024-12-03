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
exports.CampaignsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const campaigns_service_1 = require("./campaigns.service");
const video_assignment_dto_1 = require("../dto/video-assignment.dto");
const common_2 = require("@nestjs/common");
let CampaignsController = class CampaignsController {
    constructor(CampainsService) {
        this.CampainsService = CampainsService;
    }
    async findOne(id) {
        return await this.CampainsService.findOne(id);
    }
    async getAssignedCampaigns(userId, deviceId) {
        common_2.Logger.log(`Fetching campaigns for userId: ${userId}, deviceId: ${deviceId}`);
        return await this.CampainsService.getAssignedCampaigns(userId, deviceId);
    }
    async createAssignments(createVideoAssignmentDto) {
        const { userId, videoIds } = createVideoAssignmentDto;
        return await this.CampainsService.createMultipleAssignments(createVideoAssignmentDto);
    }
    async getAllCampaign() {
        const campaigns = await this.CampainsService.getAllCampaign();
        return campaigns;
    }
    async getCampaignRowsByDeviceId(deviceId) {
        const rows = await this.CampainsService.getCampaignRowsByDeviceId(deviceId);
        return rows;
    }
    async deleteCampaign(id) {
        await this.CampainsService.deleteCampaign(id);
    }
};
exports.CampaignsController = CampaignsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The video assignments have been successfully created.',
        type: [video_assignment_dto_1.VideoAssignmentResponseDto],
    }),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns the details of a video assignment.',
        type: video_assignment_dto_1.VideoAssignmentResponseDto,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CampaignsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('getDeviceCampaigns/:userId/:deviceId'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns the details of the campaigns assigned to a user and device.',
    }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('deviceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CampaignsController.prototype, "getAssignedCampaigns", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Video assignments created successfully.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [video_assignment_dto_1.CreateVideoAssignmentDto]),
    __metadata("design:returntype", Promise)
], CampaignsController.prototype, "createAssignments", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Campaigns' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [video_assignment_dto_1.VideoAssignmentResponseDto] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CampaignsController.prototype, "getAllCampaign", null);
__decorate([
    (0, common_1.Get)(':deviceId/rows'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all rows for a specific device by device ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: [video_assignment_dto_1.VideoAssignmentResponseDto],
        description: 'List of rows for the specified device',
    }),
    __param(0, (0, common_1.Param)('deviceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CampaignsController.prototype, "getCampaignRowsByDeviceId", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a campaign by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Campaign deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Campaign not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CampaignsController.prototype, "deleteCampaign", null);
exports.CampaignsController = CampaignsController = __decorate([
    (0, swagger_1.ApiTags)('Video Assignments'),
    (0, common_1.Controller)('video-assignments'),
    __metadata("design:paramtypes", [campaigns_service_1.CampainsService])
], CampaignsController);
//# sourceMappingURL=campaigns.controller.js.map