"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mount = void 0;
const jsError_1 = require("./jsError");
const types_1 = require("../types");
const mount = function (plugin) {
    switch (plugin.type) {
        case types_1.ERROR_TYPE.JS_ERROR:
            jsError_1.jsErrorMount(plugin);
            break;
    }
};
exports.mount = mount;
