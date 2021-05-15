"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mount = void 0;
const jsError_1 = require("./mount-type/jsError");
const promiseError_1 = require("./mount-type/promiseError");
const sourceError_1 = require("./mount-type/sourceError");
const xhrAndFetchError_1 = require("./mount-type/xhrAndFetchError");
const types_1 = require("./types");
const mount = function (plugin) {
    switch (plugin.type) {
        case types_1.ERROR_TYPE.JS_ERROR:
            jsError_1.jsErrorMount(plugin);
            break;
        case types_1.ERROR_TYPE.SOURCE_ERROR:
            sourceError_1.sourceErrorMount(plugin);
            break;
        case types_1.ERROR_TYPE.PROMISE_ERROR:
            promiseError_1.promiseErrorMount(plugin);
            break;
        case types_1.ERROR_TYPE.XHR_AND_FETCH_ERROR:
            xhrAndFetchError_1.xhrAndFetchErrorMount(plugin);
    }
};
exports.mount = mount;
