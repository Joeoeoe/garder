"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promiseErrorMount = void 0;
// promise unhandle error
const promiseErrorMount = function (plugin, store) {
    window.addEventListener('unhandledrejection', (event) => {
        const commonError = { message: event.reason };
        plugin.onError(commonError, event, store);
    });
};
exports.promiseErrorMount = promiseErrorMount;
