"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sourceErrorMount = void 0;
// source error
const sourceErrorMount = function (plugin, store) {
    window.addEventListener('error', (ev) => {
        // filter js error
        const target = ev.target;
        const isElementTarget = target instanceof HTMLScriptElement ||
            target instanceof HTMLLinkElement ||
            target instanceof HTMLImageElement;
        if (!isElementTarget) {
            return false;
        }
        // TODO: message
        const commonError = { message: 'source failed to load' };
        plugin.onError(commonError, ev, store);
    }, true);
};
exports.sourceErrorMount = sourceErrorMount;
