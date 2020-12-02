import { findTrioThatAddsUpTo } from './dataLookUp/findNumbers';
import { findValidPasswordsNewPolicy, findValidPasswordsOldPolicy } from './dataLookUp/findPasswords';
import { getCorruptedPasswordData, getExpenseReport } from './input/getInput';

// const expenseReportData = getExpenseReport();
const passwordData = getCorruptedPasswordData();

// const expenseResult = findTrioThatAddsUpTo(2020, expenseReportData);

const validPasswords = findValidPasswordsNewPolicy(passwordData);

console.log(validPasswords.length);
