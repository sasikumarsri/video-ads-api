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
exports.Log = exports.LogAction = void 0;
const typeorm_1 = require("typeorm");
const tv_device_entity_1 = require("./tv-device.entity");
var LogAction;
(function (LogAction) {
    LogAction["URL_OPENED"] = "URL_OPENED";
    LogAction["BROWSER_CLOSED"] = "BROWSER_CLOSED";
    LogAction["POWER_OFF"] = "POWER_OFF";
})(LogAction || (exports.LogAction = LogAction = {}));
let Log = class Log extends typeorm_1.BaseEntity {
};
exports.Log = Log;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', unsigned: true }),
    __metadata("design:type", Number)
], Log.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tv_device_entity_1.TVDevice, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'device_id' }),
    __metadata("design:type", tv_device_entity_1.TVDevice)
], Log.prototype, "device", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: LogAction }),
    __metadata("design:type", String)
], Log.prototype, "action", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Log.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Log.prototype, "created_at", void 0);
exports.Log = Log = __decorate([
    (0, typeorm_1.Entity)('logs')
], Log);
//# sourceMappingURL=log.entity.js.map