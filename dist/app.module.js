"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("./entities/user.entity");
const campaigns_entity_1 = require("./entities/campaigns.entity");
const admin_action_entity_1 = require("./entities/admin-action.entity");
const log_entity_1 = require("./entities/log.entity");
const tv_device_entity_1 = require("./entities/tv-device.entity");
const video_entity_1 = require("./entities/video.entity");
const session_entity_1 = require("./entities/session.entity");
const session_module_1 = require("./session/session.module");
const videos_module_1 = require("./videos/videos.module");
const tv_devices_module_1 = require("./tv-devices/tv-devices.module");
const campaigns_module_1 = require("./campaigns/campaigns.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST || '127.0.0.1',
                port: +process.env.DB_PORT || 3306,
                username: process.env.DB_USERNAME || 'root',
                password: process.env.DB_PASSWORD || '',
                database: process.env.DB_NAME || 'defaultdb',
                entities: [user_entity_1.User, session_entity_1.Session, video_entity_1.Video, tv_device_entity_1.TVDevice, log_entity_1.Log, admin_action_entity_1.AdminAction, campaigns_entity_1.Campaigns],
                synchronize: false,
                logging: true,
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            session_module_1.SessionModule,
            videos_module_1.VideosModule,
            campaigns_module_1.CampaignsModule,
            tv_devices_module_1.TVDevicesModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map