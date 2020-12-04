"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countValidPassports = void 0;
const countValidPassports = (passports) => {
    let result = 0;
    for (const passport of passports) {
        if (passport.isValid()) {
            result++;
        }
    }
    return result;
};
exports.countValidPassports = countValidPassports;
//# sourceMappingURL=countValidPassports.js.map