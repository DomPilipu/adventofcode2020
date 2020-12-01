"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findNumbers_1 = require("./dataLookUp/findNumbers");
const getExpenseReport_1 = require("./expenseReport/getExpenseReport");
const data = getExpenseReport_1.getExpenseReport();
//const numberTupleThatAddsUpTo2020 = findTupleThatAddsUpTo2020([...data]);
const numberTrioThatAddsUpTo2020 = findNumbers_1.findTrioThatAddsUpTo2020([...data]);
console.log(numberTrioThatAddsUpTo2020.a * numberTrioThatAddsUpTo2020.b * numberTrioThatAddsUpTo2020.c);
//# sourceMappingURL=app.js.map