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
exports.CollectService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const collect_schema_1 = require("./collect.schema");
let CollectService = class CollectService {
    constructor(collectModel) {
        this.collectModel = collectModel;
    }
    test() {
        const test = new this.collectModel({
            col: 0,
            message: 'test',
            row: 1,
            stack: 'asd',
            timestamp: 123,
        });
        test.save();
        return 'collect service test';
    }
    async addErrorCollect(errorList) {
        const result = await this.collectModel.insertMany(errorList);
        if (result) {
            return true;
        }
        else {
            return false;
        }
    }
};
CollectService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(collect_schema_1.Collect.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CollectService);
exports.CollectService = CollectService;
//# sourceMappingURL=collect.service.js.map