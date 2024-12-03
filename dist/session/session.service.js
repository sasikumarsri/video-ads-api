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
exports.SessionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const jwt = require("jsonwebtoken");
const session_entity_1 = require("../entities/session.entity");
const user_entity_1 = require("../entities/user.entity");
let SessionService = class SessionService {
    constructor(sessionRepository, userRepository) {
        this.sessionRepository = sessionRepository;
        this.userRepository = userRepository;
        this.jwtSecret = 'your_jwt_secret_key';
    }
    async createSession(userId) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new Error('User not found');
        }
        const sessionToken = jwt.sign({ userId: user.id, username: user.username }, this.jwtSecret, {
            expiresIn: '1h',
        });
        const newSession = this.sessionRepository.create({
            user,
            session_token: sessionToken,
            expires_at: new Date(Date.now() + 60 * 60 * 1000),
        });
        return this.sessionRepository.save(newSession);
    }
    async validateSession(sessionToken) {
        try {
            const decoded = jwt.verify(sessionToken, this.jwtSecret);
            const session = await this.sessionRepository.findOne({
                where: { session_token: sessionToken },
            });
            if (session && session.expires_at > new Date()) {
                return session;
            }
            return null;
        }
        catch (error) {
            return null;
        }
    }
    async deleteSession(sessionToken) {
        const session = await this.sessionRepository.findOne({
            where: { session_token: sessionToken },
        });
        if (session) {
            await this.sessionRepository.remove(session);
        }
    }
};
exports.SessionService = SessionService;
exports.SessionService = SessionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(session_entity_1.Session)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SessionService);
//# sourceMappingURL=session.service.js.map