"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExpenseReport = void 0;
const getInput_1 = require("../input/getInput");
const getExpenseReport = () => {
    const result = [];
    const data = getInput_1.getInput('1');
    const dataSplitted = data.split(/\r?\n/);
    for (const strNumber of dataSplitted) {
        const parseResult = parseInt(strNumber);
        result.push(parseResult);
    }
    return result;
};
exports.getExpenseReport = getExpenseReport;
//# sourceMappingURL=getExpenseReport.js.map