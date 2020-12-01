import { findTrioThatAddsUpTo2020, findTupleThatAddsUpTo2020 } from './dataLookUp/findNumbers';
import { getExpenseReport } from './expenseReport/getExpenseReport';

const data = getExpenseReport();
//const numberTupleThatAddsUpTo2020 = findTupleThatAddsUpTo2020([...data]);
const numberTrioThatAddsUpTo2020 = findTrioThatAddsUpTo2020([...data]);

console.log(numberTrioThatAddsUpTo2020.a * numberTrioThatAddsUpTo2020.b * numberTrioThatAddsUpTo2020.c);
