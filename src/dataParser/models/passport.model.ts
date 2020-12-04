export class Passport {
    private byr?: string;
    private iyr?: string;
    private eyr?: string;
    private hgt?: string;
    private hcl?: string;
    private ecl?: string;
    private pid?: string;
    private cid?: string;

    constructor(passportDataString: string) {
        const passportDataStringSplitted = passportDataString.split(' ');

        for (const passportData of passportDataStringSplitted) {
            this[passportData.split(':')[0]] = passportData.split(':')[1];
        }
    }

    isValid(): boolean {
        if (this.byr && this.ecl && this.eyr && this.hcl && this.hgt && this.iyr && this.pid) {
            if (
                this.validateNumber(this.byr, 1920, 2002) &&
                this.validateNumber(this.iyr, 2010, 2020) &&
                this.validateNumber(this.eyr, 2020, 2030) &&
                this.validateHeight() &&
                this.validateHairColor() &&
                this.validateEyeColor() &&
                this.validatePassportId()
            ) {
                return true;
            }
        }
        return false;
    }

    private validateNumber(field: string, least: number, most: number) {
        const fieldAsNumber = parseInt(field);
        if (fieldAsNumber >= least && fieldAsNumber <= most) {
            return true;
        }
        return false;
    }

    private validateHeight(): boolean {
        if (this.hgt.endsWith('cm')) {
            return this.validateNumber(this.hgt.replace('cm', ''), 150, 193);
        }
        if (this.hgt.endsWith('in')) {
            return this.validateNumber(this.hgt.replace('in', ''), 59, 76);
        }
        return false;
    }

    private validateHairColor(): boolean {
        return /^#[0-9a-f]{6}/i.test(this.hcl);
    }

    private validateEyeColor(): boolean {
        if (
            this.ecl === 'amb' ||
            this.ecl === 'blu' ||
            this.ecl === 'brn' ||
            this.ecl === 'gry' ||
            this.ecl === 'grn' ||
            this.ecl === 'hzl' ||
            this.ecl === 'oth'
        ) {
            return true;
        }
        return false;
    }

    private validatePassportId(): boolean {
        if (/^[0-9]{9}$/i.test(this.pid)) {
            console.log(this.pid);
            return true;
        }
        return false;
    }
}
