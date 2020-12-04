"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passport = void 0;
class Passport {
    constructor(passportDataString) {
        const passportDataStringSplitted = passportDataString.split(' ');
        for (const passportData of passportDataStringSplitted) {
            this[passportData.split(':')[0]] = passportData.split(':')[1];
        }
    }
    isValid() {
        if (this.byr && this.ecl && this.eyr && this.hcl && this.hgt && this.iyr && this.pid) {
            if (this.validateNumber(this.byr, 1920, 2002) &&
                this.validateNumber(this.iyr, 2010, 2020) &&
                this.validateNumber(this.eyr, 2020, 2030) &&
                this.validateHeight() &&
                this.validateHairColor() &&
                this.validateEyeColor() &&
                this.validatePassportId()) {
                return true;
            }
        }
        return false;
    }
    validateNumber(field, least, most) {
        const fieldAsNumber = parseInt(field);
        if (fieldAsNumber >= least && fieldAsNumber <= most) {
            return true;
        }
        return false;
    }
    validateHeight() {
        if (this.hgt.endsWith('cm')) {
            return this.validateNumber(this.hgt.replace('cm', ''), 150, 193);
        }
        if (this.hgt.endsWith('in')) {
            return this.validateNumber(this.hgt.replace('in', ''), 59, 76);
        }
        return false;
    }
    validateHairColor() {
        return /^#[0-9a-f]{6}/i.test(this.hcl);
    }
    validateEyeColor() {
        if (this.ecl === 'amb' ||
            this.ecl === 'blu' ||
            this.ecl === 'brn' ||
            this.ecl === 'gry' ||
            this.ecl === 'grn' ||
            this.ecl === 'hzl' ||
            this.ecl === 'oth') {
            return true;
        }
        return false;
    }
    validatePassportId() {
        if (/^[0-9]{9}$/i.test(this.pid)) {
            console.log(this.pid);
            return true;
        }
        return false;
    }
}
exports.Passport = Passport;
//# sourceMappingURL=passport.model.js.map