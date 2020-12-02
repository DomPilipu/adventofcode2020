"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findPasswords_1 = require("./dataLookUp/findPasswords");
const getInput_1 = require("./input/getInput");
// const expenseReportData = getExpenseReport();
const passwordData = getInput_1.getCorruptedPasswordData();
// const expenseResult = findTrioThatAddsUpTo(2020, expenseReportData);
const validPasswords = findPasswords_1.findValidPasswordsNewPolicy(passwordData);
console.log(validPasswords.length);
//# sourceMappingURL=app.js.map