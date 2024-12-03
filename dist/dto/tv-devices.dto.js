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
exports.CreateTVDeviceDto = exports.UpdateTVDeviceDto = exports.TVDeviceResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class TVDeviceResponseDto {
}
exports.TVDeviceResponseDto = TVDeviceResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'The ID of the device' }),
    __metadata("design:type", Number)
], TVDeviceResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Living Room TV',
        description: 'The name of the device',
    }),
    __metadata("design:type", String)
], TVDeviceResponseDto.prototype, "device_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Whether the device is online' }),
    __metadata("design:type", Boolean)
], TVDeviceResponseDto.prototype, "is_online", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-11-24T12:00:00Z',
        description: 'The timestamp of the last time the device was seen online',
    }),
    __metadata("design:type", Date)
], TVDeviceResponseDto.prototype, "last_seen", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-11-24T12:00:00Z',
        description: 'The timestamp of when the device was last updated',
    }),
    __metadata("design:type", Date)
], TVDeviceResponseDto.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The ID of the user associated with this device',
    }),
    __metadata("design:type", Number)
], TVDeviceResponseDto.prototype, "user_id", void 0);
class UpdateTVDeviceDto {
}
exports.UpdateTVDeviceDto = UpdateTVDeviceDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Bedroom TV',
        description: 'The updated name of the device',
    }),
    __metadata("design:type", String)
], UpdateTVDeviceDto.prototype, "device_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: false,
        description: 'The updated online status of the device',
    }),
    __metadata("design:type", Boolean)
], UpdateTVDeviceDto.prototype, "is_online", void 0);
class CreateTVDeviceDto {
}
exports.CreateTVDeviceDto = CreateTVDeviceDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Living Room TV',
        description: 'The name of the device',
    }),
    __metadata("design:type", String)
], CreateTVDeviceDto.prototype, "device_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The ID of the user associated with this device',
    }),
    __metadata("design:type", Number)
], CreateTVDeviceDto.prototype, "user_id", void 0);
//# sourceMappingURL=tv-devices.dto.js.map