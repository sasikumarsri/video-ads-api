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
exports.CampainsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const campaigns_entity_1 = require("../entities/campaigns.entity");
const video_entity_1 = require("../entities/video.entity");
const tv_device_entity_1 = require("../entities/tv-device.entity");
let CampainsService = class CampainsService {
    constructor(videoAssignmentRepository, videoRepository, tvDeviceRepository) {
        this.videoAssignmentRepository = videoAssignmentRepository;
        this.videoRepository = videoRepository;
        this.tvDeviceRepository = tvDeviceRepository;
    }
    async findOne(id) {
        const videoAssignment = await this.videoAssignmentRepository.findOne({
            where: { id },
            relations: ['video', 'device'],
        });
        if (!videoAssignment) {
            throw new common_1.NotFoundException(`VideoAssignment with ID ${id} not found`);
        }
        return videoAssignment;
    }
    async getAssignedCampaigns(userId, deviceId) {
        const campaigns = await this.videoAssignmentRepository.find({
            where: {
                userId,
                device: { id: deviceId },
            },
            relations: ['video', 'device'],
        });
        if (!campaigns.length) {
            throw new common_1.NotFoundException(`No campaigns found for user ID ${userId} and device ID ${deviceId}`);
        }
        return campaigns;
    }
    async createMultipleAssignments(createVideoAssignmentDto) {
        const { userId, videoIds, campaignName } = createVideoAssignmentDto;
        const devices = await this.tvDeviceRepository.find({
            where: { user: { id: userId } },
        });
        if (!devices.length) {
            throw new common_1.NotFoundException(`No devices found for user ID ${userId}`);
        }
        const videos = await this.videoRepository.findByIds(videoIds);
        if (videos.length !== videoIds.length) {
            const missingVideos = videoIds.filter((id) => !videos.some((video) => video.id === id));
            throw new common_1.NotFoundException(`Videos with IDs ${missingVideos.join(', ')} not found`);
        }
        const videoAssignments = devices.flatMap((device) => videos.map((video) => this.videoAssignmentRepository.create({
            campaignName,
            video,
            device,
            userId,
        })));
        return await this.videoAssignmentRepository.save(videoAssignments);
    }
    async getAllCampaigns() {
        return this.videoAssignmentRepository.find();
    }
    async getAllCampaign() {
        const campaigns = await this.videoAssignmentRepository.find({
            relations: ['video', 'device', 'device.user'],
        });
        const groupedByDeviceId = campaigns.reduce((acc, curr) => {
            const deviceId = curr.device?.id;
            if (!deviceId) {
                return acc;
            }
            if (!acc[deviceId]) {
                acc[deviceId] = {
                    deviceId,
                    deviceName: curr.device.device_name,
                    userName: curr.device.user,
                    count: 0,
                    campaignNames: new Set(),
                };
            }
            const deviceGroup = acc[deviceId];
            deviceGroup.count += 1;
            deviceGroup.campaignNames.add(curr.campaignName);
            return acc;
        }, {});
        const result = Object.values(groupedByDeviceId).map((group) => ({
            campaignName: Array.from(group.campaignNames).join(', '),
            userName: group.userName,
            count: group.count,
            deviceId: group.deviceId,
            deviceName: group.deviceName,
        }));
        return result;
    }
    async getCampaignRowsByDeviceId(deviceId) {
        const campaigns = await this.videoAssignmentRepository.find({
            where: { device: { id: deviceId } },
            relations: ['video', 'device', 'device.user'],
        });
        return campaigns.map((campaign) => ({
            id: campaign.id,
            campaignName: campaign.campaignName,
            userName: campaign.device?.user,
            deviceId: campaign.device?.id,
            deviceName: campaign.device?.device_name,
            assetType: campaign.assetType,
            assignedAssetUrl: campaign.assignedAssetUrl,
            video: {
                title: campaign.video?.title,
                url: campaign.video?.url,
            },
            createdDate: campaign.createdDate,
            updatedDate: campaign.updatedDate,
        }));
    }
    async deleteCampaign(id) {
        const campaign = await this.videoAssignmentRepository.findOne({
            where: { id },
        });
        if (!campaign) {
            throw new common_1.NotFoundException(`Campaign with ID ${id} not found`);
        }
        await this.videoAssignmentRepository.remove(campaign);
    }
};
exports.CampainsService = CampainsService;
exports.CampainsService = CampainsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(campaigns_entity_1.Campaigns)),
    __param(1, (0, typeorm_1.InjectRepository)(video_entity_1.Video)),
    __param(2, (0, typeorm_1.InjectRepository)(tv_device_entity_1.TVDevice)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CampainsService);
//# sourceMappingURL=campaigns.service.js.map