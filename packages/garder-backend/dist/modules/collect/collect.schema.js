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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectSchema = exports.Collect = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const garder_common_1 = require("garder-common");
let Collect = class Collect {
};
_a = garder_common_1.ERROR_FIELD.COL, _b = garder_common_1.ERROR_FIELD.MESSAGE, _c = garder_common_1.ERROR_FIELD.ROW, _d = garder_common_1.ERROR_FIELD.STACK, _e = garder_common_1.ERROR_FIELD.TIMESTAMP;
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Collect.prototype, _a, void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Collect.prototype, _b, void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Collect.prototype, _c, void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Collect.prototype, _d, void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Collect.prototype, _e, void 0);
Collect = __decorate([
    mongoose_1.Schema()
], Collect);
exports.Collect = Collect;
exports.CollectSchema = mongoose_1.SchemaFactory.createForClass(Collect);
//# sourceMappingURL=collect.schema.js.map