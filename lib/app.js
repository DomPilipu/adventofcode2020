"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findHighestSearId_1 = require("./dataLookUp/findHighestSearId");
const getInput_1 = require("./input/getInput");
// const expenseReportData = getExpenseReport();
// const passwordData = getCorruptedPasswordData();
// const map = getMap();
// const passportdata = getPassportData();
const boardingPassData = getInput_1.getBoardingPassData();
// const expenseResult = findTrioThatAddsUpTo(2020, expenseReportData);
// const validPasswords = findValidPasswordsNewPolicy(passwordData);
// console.log(countTrees(map, 1, 1) * countTrees(map, 3, 1) * countTrees(map, 5, 1) * countTrees(map, 7, 1) * countTrees(map, 1, 2));
// console.log(countValidPassports(parsePassportData(passportdata)));
findHighestSearId_1.findHighestSeatId(boardingPassData);
//# sourceMappingURL=app.js.map