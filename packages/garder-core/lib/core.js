"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = void 0;
const mount_1 = require("./error-collect/mount");
const store_1 = __importDefault(require("./store"));
class Core {
    constructor(plugins) {
        this.plugins = plugins;
    }
    init() {
        const plugins = this.plugins;
        const store = new store_1.default('garder');
        for (const plugin of plugins) {
            mount_1.mount(plugin, store);
        }
        console.log('init finish');
    }
}
exports.Core = Core;
