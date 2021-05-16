"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 自动延时上报
 * 提供接口：存储
 * 当长度一定时自动上报并清空：队列
 * 存储空间：考虑后续rrweb，故将所有记录存在indexedDB中
 */
const dexie_1 = __importDefault(require("dexie"));
const garder_common_1 = require("garder-common");
const reporter_1 = require("../reporter");
const types_1 = require("../types");
class Store {
    constructor(dbName) {
        this.dbName = dbName;
        this.db = new dexie_1.default(dbName);
        this.db.version(1).stores({
            [types_1.TABLE.ERROR]: `
      ++${garder_common_1.ERROR_FIELD.ID},
      ${garder_common_1.ERROR_FIELD.STACK},
      ${garder_common_1.ERROR_FIELD.TIMESTAMP},
      ${garder_common_1.ERROR_FIELD.MESSAGE},
      ${garder_common_1.ERROR_FIELD.COL},
      ${garder_common_1.ERROR_FIELD.ROW}
      `,
        });
        console.log(this.db);
        this.errorMaxCount = 10;
    }
    addError(error) {
        return __awaiter(this, void 0, void 0, function* () {
            const pk = yield this.db[types_1.TABLE.ERROR].add({
                [garder_common_1.ERROR_FIELD.STACK]: error.stack,
                [garder_common_1.ERROR_FIELD.MESSAGE]: error.message,
                [garder_common_1.ERROR_FIELD.TIMESTAMP]: new Date().getTime(),
                [garder_common_1.ERROR_FIELD.ROW]: error.row,
                [garder_common_1.ERROR_FIELD.COL]: error.col,
            });
            const errorMaxCount = this.errorMaxCount;
            const errorList = yield this.getErrorList();
            if (errorList.length >= errorMaxCount) {
                // 批量上报
                console.log('开始上报');
                reporter_1.report(errorList);
                this.clearErrorTable();
            }
            return pk;
        });
    }
    getErrorList() {
        return __awaiter(this, void 0, void 0, function* () {
            const db = this.db;
            const errorTable = db[types_1.TABLE.ERROR];
            const errorList = yield errorTable.toArray();
            return errorList;
        });
    }
    // clear error table
    clearErrorTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const db = this.db;
            const errorTable = db[types_1.TABLE.ERROR];
            return yield errorTable.clear();
        });
    }
}
exports.default = Store;
