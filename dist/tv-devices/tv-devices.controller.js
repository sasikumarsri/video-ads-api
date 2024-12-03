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
exports.TVDevicesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tv_devices_service_1 = require("./tv-devices.service");
const tv_devices_dto_1 = require("../dto/tv-devices.dto");
let TVDevicesController = class TVDevicesController {
    constructor(tvDevicesService) {
        this.tvDevicesService = tvDevicesService;
    }
    create(createTVDeviceDto) {
        return this.tvDevicesService.create(createTVDeviceDto);
    }
    findAll() {
        return this.tvDevicesService.findAll();
    }
    findOne(id) {
        return this.tvDevicesService.findOne(id);
    }
    update(id, updateTVDeviceDto) {
        return this.tvDevicesService.update(id, updateTVDeviceDto);
    }
    remove(id) {
        return this.tvDevicesService.remove(id);
    }
    getDeviceByUserId(id) {
        return this.tvDevicesService.getDevicesByUserId(id);
    }
};
exports.TVDevicesController = TVDevicesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new TV device' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: tv_devices_dto_1.TVDeviceResponseDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tv_devices_dto_1.CreateTVDeviceDto]),
    __metadata("design:returntype", void 0)
], TVDevicesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all TV devices' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [tv_devices_dto_1.TVDeviceResponseDto] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TVDevicesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a TV device by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: tv_devices_dto_1.TVDeviceResponseDto }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TVDevicesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a TV device by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: tv_devices_dto_1.TVDeviceResponseDto }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, tv_devices_dto_1.UpdateTVDeviceDto]),
    __metadata("design:returntype", void 0)
], TVDevicesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a TV device by ID' }),
    (0, swagger_1.ApiResponse)({ status: 204 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TVDevicesController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('getDevice/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a TV device by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: tv_devices_dto_1.TVDeviceResponseDto }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TVDevicesController.prototype, "getDeviceByUserId", null);
exports.TVDevicesController = TVDevicesController = __decorate([
    (0, swagger_1.ApiTags)('TV Devices'),
    (0, common_1.Controller)('tv-devices'),
    __metadata("design:paramtypes", [tv_devices_service_1.TVDevicesService])
], TVDevicesController);
//# sourceMappingURL=tv-devices.controller.js.map