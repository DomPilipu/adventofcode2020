import { countTrees } from './dataLookUp/countTrees';
import { findTrioThatAddsUpTo } from './dataLookUp/findNumbers';
import { findValidPasswordsNewPolicy, findValidPasswordsOldPolicy } from './dataLookUp/findPasswords';
import { getCorruptedPasswordData, getExpenseReport, getMap } from './input/getInput';

// const expenseReportData = getExpenseReport();
// const passwordData = getCorruptedPasswordData();
const map = getMap();

// const expenseResult = findTrioThatAddsUpTo(2020, expenseReportData);
// const validPasswords = findValidPasswordsNewPolicy(passwordData);

console.log(countTrees(map, 1, 1) * countTrees(map, 3, 1) * countTrees(map, 5, 1) * countTrees(map, 7, 1) * countTrees(map, 1, 2));
