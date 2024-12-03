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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user_entity_1 = require("../entities/user.entity");
const tv_device_entity_1 = require("../entities/tv-device.entity");
const fingerprintjs_1 = require("@fingerprintjs/fingerprintjs");
let UserService = class UserService {
    constructor(userRepository, tvDeviceRepository) {
        this.userRepository = userRepository;
        this.tvDeviceRepository = tvDeviceRepository;
        this.jwtSecret = 'your_jwt_secret_key';
        this.getDeviceId = async () => {
            const fp = await fingerprintjs_1.default.load();
            const result = await fp.get();
            return result.visitorId;
        };
    }
    async create(username, password, role) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = this.userRepository.create({
            username,
            password: hashedPassword,
            role,
        });
        return this.userRepository.save(newUser);
    }
    async login(username, password, deviceId) {
        const user = await this.userRepository.findOne({ where: { username } });
        if (!user) {
            throw new common_1.ForbiddenException('Invalid credentials');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new common_1.ForbiddenException('Invalid credentials');
        }
        let device = await this.tvDeviceRepository.findOne({
            where: { user: { id: user.id }, id: deviceId },
        });
        if (device) {
            device.last_seen = new Date();
            device.is_online = true;
            await this.tvDeviceRepository.save(device);
        }
        else {
            const newDevice = this.tvDeviceRepository.create({
                device_name: 'test device' + new Date().toISOString(),
                user: { id: user.id },
                is_online: true,
                last_seen: new Date(),
            });
            device = await this.tvDeviceRepository.save(newDevice);
        }
        const token = jwt.sign({ userId: user.id, username: user.username, role: user.role }, this.jwtSecret, { expiresIn: '1h' });
        const data = {
            token,
            userName: user.username,
            id: user.id,
            role: user.role,
            deviceId: device.id,
        };
        return { message: 'Login successful', data };
    }
    async findOneById(id) {
        return this.userRepository.findOne({ where: { id } });
    }
    async getAllUsers() {
        return this.userRepository.find();
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(tv_device_entity_1.TVDevice)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map