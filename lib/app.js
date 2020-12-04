"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const countValidPassports_1 = require("./dataLookUp/countValidPassports");
const parsePassportData_1 = require("./dataParser/parsePassportData");
const getInput_1 = require("./input/getInput");
// const expenseReportData = getExpenseReport();
// const passwordData = getCorruptedPasswordData();
// const map = getMap();
const passportdata = getInput_1.getPassportData();
// const expenseResult = findTrioThatAddsUpTo(2020, expenseReportData);
// const validPasswords = findValidPasswordsNewPolicy(passwordData);
// console.log(countTrees(map, 1, 1) * countTrees(map, 3, 1) * countTrees(map, 5, 1) * countTrees(map, 7, 1) * countTrees(map, 1, 2));
console.log(countValidPassports_1.countValidPassports(parsePassportData_1.parsePassportData(passportdata)));
//# sourceMappingURL=app.js.map