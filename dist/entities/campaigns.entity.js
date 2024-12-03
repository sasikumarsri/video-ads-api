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
exports.Campaigns = void 0;
const typeorm_1 = require("typeorm");
const video_entity_1 = require("./video.entity");
const tv_device_entity_1 = require("./tv-device.entity");
let Campaigns = class Campaigns extends typeorm_1.BaseEntity {
};
exports.Campaigns = Campaigns;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', unsigned: true }),
    __metadata("design:type", Number)
], Campaigns.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'campaign_name',
        type: 'varchar',
        length: 255,
        default: 'Unnamed Campaign',
    }),
    __metadata("design:type", String)
], Campaigns.prototype, "campaignName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', type: 'int' }),
    __metadata("design:type", Number)
], Campaigns.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
    }),
    __metadata("design:type", Date)
], Campaigns.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
    }),
    __metadata("design:type", Date)
], Campaigns.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'device_type',
        type: 'enum',
        enum: ['landscape', 'portrait'],
        nullable: false,
    }),
    __metadata("design:type", String)
], Campaigns.prototype, "assetType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'assigned_asset_url',
        type: 'varchar',
        length: 2083,
        nullable: true,
    }),
    __metadata("design:type", String)
], Campaigns.prototype, "assignedAssetUrl", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => video_entity_1.Video, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'video_id' }),
    __metadata("design:type", video_entity_1.Video)
], Campaigns.prototype, "video", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tv_device_entity_1.TVDevice, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'device_id' }),
    __metadata("design:type", tv_device_entity_1.TVDevice)
], Campaigns.prototype, "device", void 0);
exports.Campaigns = Campaigns = __decorate([
    (0, typeorm_1.Entity)('campaigns')
], Campaigns);
//# sourceMappingURL=campaigns.entity.js.map