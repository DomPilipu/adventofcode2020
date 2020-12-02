"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCorruptedPasswordData = exports.getExpenseReport = void 0;
const fs_1 = __importDefault(require("fs"));
const getInput = (file) => {
    try {
        const data = fs_1.default.readFileSync('./input/' + file + '.txt', 'utf8');
        return data;
    }
    catch (error) {
        console.log(error);
    }
};
const getExpenseReport = () => {
    const result = [];
    const data = getInput('1');
    const dataSplitted = data.split(/\r?\n/);
    for (const strNumber of dataSplitted) {
        const parseResult = parseInt(strNumber);
        result.push(parseResult);
    }
    return result;
};
exports.getExpenseReport = getExpenseReport;
const getCorruptedPasswordData = () => {
    const result = [];
    const data = getInput('2');
    const dataSplitted = data.split(/\r?\n/);
    for (const dataEntry of dataSplitted) {
        const dataEntrySplitted = dataEntry.split(' ');
        const minMaxSplit = dataEntrySplitted[0].split('-');
        result.push({
            policy: {
                firstNumber: parseInt(minMaxSplit[0]),
                lastNumber: parseInt(minMaxSplit[1]),
                char: dataEntrySplitted[1].replace(':', ''),
            },
            password: dataEntrySplitted[2],
        });
    }
    return result;
};
exports.getCorruptedPasswordData = getCorruptedPasswordData;
//# sourceMappingURL=getInput.js.map