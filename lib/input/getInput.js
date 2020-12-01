"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInput = void 0;
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
exports.getInput = getInput;
//# sourceMappingURL=getInput.js.map