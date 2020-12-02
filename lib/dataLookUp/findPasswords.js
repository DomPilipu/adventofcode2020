"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findValidPasswordsNewPolicy = exports.findValidPasswordsOldPolicy = void 0;
const findValidPasswordsOldPolicy = (data) => {
    return findValidPasswords(data, (entry, result) => {
        const passwordFilteredDownToPolicyChar = entry.password.split('').filter((char) => char === entry.policy.char);
        if (passwordFilteredDownToPolicyChar.length >= entry.policy.firstNumber &&
            passwordFilteredDownToPolicyChar.length <= entry.policy.lastNumber) {
            result.push(entry);
        }
    });
};
exports.findValidPasswordsOldPolicy = findValidPasswordsOldPolicy;
const findValidPasswordsNewPolicy = (data) => {
    return findValidPasswords(data, (entry, result) => {
        if ((entry.password.charAt(entry.policy.firstNumber - 1) === entry.policy.char) !==
            (entry.password.charAt(entry.policy.lastNumber - 1) === entry.policy.char)) {
            result.push(entry);
        }
    });
};
exports.findValidPasswordsNewPolicy = findValidPasswordsNewPolicy;
const findValidPasswords = (data, validationFunc) => {
    const result = [];
    for (const entry of data) {
        validationFunc(entry, result);
    }
    return result;
};
//# sourceMappingURL=findPasswords.js.map