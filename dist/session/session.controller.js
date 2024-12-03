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
exports.SessionController = void 0;
const common_1 = require("@nestjs/common");
const session_service_1 = require("./session.service");
const swagger_1 = require("@nestjs/swagger");
const session_dto_1 = require("../dto/session.dto");
let SessionController = class SessionController {
    constructor(sessionService) {
        this.sessionService = sessionService;
    }
    async createSession(createSessionDto) {
        const { user_id } = createSessionDto;
        try {
            const session = await this.sessionService.createSession(user_id);
            return {
                session_token: session.session_token,
                expires_at: session.expires_at,
            };
        }
        catch (error) {
            throw new common_1.BadRequestException('Invalid credentials');
        }
    }
    async validateSession(sessionToken) {
        const session = await this.sessionService.validateSession(sessionToken);
        if (!session) {
            throw new common_1.BadRequestException('Invalid or expired session token');
        }
        return {
            session_token: session.session_token,
            expires_at: session.expires_at,
        };
    }
    async deleteSession(sessionToken) {
        try {
            await this.sessionService.deleteSession(sessionToken);
        }
        catch (error) {
            throw new common_1.BadRequestException('Session token not found or invalid');
        }
    }
};
exports.SessionController = SessionController;
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new session (login)' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Session created successfully.',
        type: session_dto_1.SessionResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid credentials.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [session_dto_1.CreateSessionDto]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "createSession", null);
__decorate([
    (0, common_1.Post)('validate'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Validate a session (check if the token is still valid)',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Session is valid.' }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Invalid or expired session token.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "validateSession", null);
__decorate([
    (0, common_1.Post)('delete'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a session (logout)' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Session deleted successfully.' }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Session token not found or invalid.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "deleteSession", null);
exports.SessionController = SessionController = __decorate([
    (0, swagger_1.ApiTags)('sessions'),
    (0, common_1.Controller)('sessions'),
    __metadata("design:paramtypes", [session_service_1.SessionService])
], SessionController);
//# sourceMappingURL=session.controller.js.map