"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findValidPasswordsNewPolicy = exports.findValidPasswordsOldPolicy = void 0;
const findValidPasswordsOldPolicy = (data) => {
    const result = [];
    for (const entry of data) {
        const passwordFilteredDownToPolicyChar = entry.password.split('').filter((char) => char === entry.policy.char);
        if (passwordFilteredDownToPolicyChar.length >= entry.policy.firstNumber &&
            passwordFilteredDownToPolicyChar.length <= entry.policy.lastNumber) {
            result.push(entry);
        }
    }
    return result;
};
exports.findValidPasswordsOldPolicy = findValidPasswordsOldPolicy;
const findValidPasswordsNewPolicy = (data) => {
    const result = [];
    for (const entry of data) {
        if (entry.password.charAt(entry.policy.firstNumber - 1) === entry.policy.char &&
            entry.password.charAt(entry.policy.lastNumber - 1) !== entry.policy.char) {
            console.log(entry);
            result.push(entry);
        }
    }
    return result;
};
exports.findValidPasswordsNewPolicy = findValidPasswordsNewPolicy;
//# sourceMappingURL=findCorruptedPasswords.js.map