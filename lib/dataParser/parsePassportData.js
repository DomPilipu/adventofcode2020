"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePassportData = void 0;
const passport_model_1 = require("./models/passport.model");
const parsePassportData = (data) => {
    const result = [];
    let tempStrArr = [];
    for (const str of data) {
        if (str.length > 0) {
            tempStrArr.push(str);
        }
        else {
            const splittedPassportData = tempStrArr.join(' ');
            const passport = new passport_model_1.Passport(splittedPassportData);
            result.push(passport);
            tempStrArr = [];
        }
    }
    return result;
};
exports.parsePassportData = parsePassportData;
//# sourceMappingURL=parsePassportData.js.map