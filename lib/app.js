"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const countTrees_1 = require("./dataLookUp/countTrees");
const getInput_1 = require("./input/getInput");
// const expenseReportData = getExpenseReport();
// const passwordData = getCorruptedPasswordData();
const map = getInput_1.getMap();
// const expenseResult = findTrioThatAddsUpTo(2020, expenseReportData);
// const validPasswords = findValidPasswordsNewPolicy(passwordData);
console.log(countTrees_1.countTrees(map, 1, 1) * countTrees_1.countTrees(map, 3, 1) * countTrees_1.countTrees(map, 5, 1) * countTrees_1.countTrees(map, 7, 1) * countTrees_1.countTrees(map, 1, 2));
//# sourceMappingURL=app.js.map