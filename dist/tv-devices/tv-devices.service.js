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
exports.TVDevicesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tv_device_entity_1 = require("../entities/tv-device.entity");
let TVDevicesService = class TVDevicesService {
    constructor(tvDeviceRepository) {
        this.tvDeviceRepository = tvDeviceRepository;
    }
    async create(createTVDeviceDto) {
        const device = this.tvDeviceRepository.create({
            ...createTVDeviceDto,
            user: { id: createTVDeviceDto.user_id },
        });
        return this.tvDeviceRepository.save(device);
    }
    async findAll() {
        return this.tvDeviceRepository.find({ relations: ['user'] });
    }
    async findOne(id) {
        const device = await this.tvDeviceRepository.findOne({
            where: { id },
            relations: ['user'],
        });
        if (!device)
            throw new common_1.NotFoundException(`Device with ID ${id} not found`);
        return device;
    }
    async update(id, updateTVDeviceDto) {
        const device = await this.findOne(id);
        Object.assign(device, updateTVDeviceDto);
        return this.tvDeviceRepository.save(device);
    }
    async remove(id) {
        const device = await this.findOne(id);
        await this.tvDeviceRepository.remove(device);
    }
    async getDevicesByUserId(id) {
        const data = await this.tvDeviceRepository.find({
            where: { user: { id } },
        });
        return data;
    }
};
exports.TVDevicesService = TVDevicesService;
exports.TVDevicesService = TVDevicesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tv_device_entity_1.TVDevice)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TVDevicesService);
//# sourceMappingURL=tv-devices.service.js.map