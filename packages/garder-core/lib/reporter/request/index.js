"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const request = function (dataArray) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log('响应成功');
        }
    };
    // TODO 待填充url
    xhr.open('POST', 'http://localhost:3000/collect');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify({ data: dataArray }));
};
exports.request = request;
