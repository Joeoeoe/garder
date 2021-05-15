"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsErrorMount = void 0;
// js runtime error
const jsErrorMount = function (plugin) {
    window.addEventListener('error', (ev) => {
        const commonError = { message: ev.message };
        plugin.onError(commonError, ev);
    });
};
exports.jsErrorMount = jsErrorMount;
