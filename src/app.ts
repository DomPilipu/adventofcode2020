import { countTrees } from './dataLookUp/countTrees';
import { countValidPassports } from './dataLookUp/countValidPassports';
import { findHighestSeatId } from './dataLookUp/findHighestSearId';
import { findTrioThatAddsUpTo } from './dataLookUp/findNumbers';
import { findValidPasswordsNewPolicy, findValidPasswordsOldPolicy } from './dataLookUp/findPasswords';
import { parsePassportData } from './dataParser/parsePassportData';
import { getBoardingPassData, getCorruptedPasswordData, getExpenseReport, getMap, getPassportData } from './input/getInput';

// const expenseReportData = getExpenseReport();
// const passwordData = getCorruptedPasswordData();
// const map = getMap();
// const passportdata = getPassportData();
const boardingPassData = getBoardingPassData();

// const expenseResult = findTrioThatAddsUpTo(2020, expenseReportData);
// const validPasswords = findValidPasswordsNewPolicy(passwordData);
// console.log(countTrees(map, 1, 1) * countTrees(map, 3, 1) * countTrees(map, 5, 1) * countTrees(map, 7, 1) * countTrees(map, 1, 2));
// console.log(countValidPassports(parsePassportData(passportdata)));
findHighestSeatId(boardingPassData);
