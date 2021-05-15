"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.report = void 0;
const request_1 = require("./request");
// TODO 批量上报、延时上报
const report = function (errorList) {
    console.log(errorList);
    // TODO 用户直接关闭窗口如何处理
    request_1.request(errorList);
};
exports.report = report;
