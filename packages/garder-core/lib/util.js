"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTableField = void 0;
const generateTableField = function (enumObj) {
    let str = '';
    const keys = Object.keys(enumObj);
    console.log(enumObj);
    for (const key of keys) {
        const value = enumObj[key];
        if (value === 'id') {
            str += `++${value},`;
        }
        else {
            str += `${value}`;
        }
    }
    console.log(str);
    return str;
};
exports.generateTableField = generateTableField;
