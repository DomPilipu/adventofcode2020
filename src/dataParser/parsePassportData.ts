import { Passport } from './models/passport.model';

export const parsePassportData = (data: string[]): Passport[] => {
    const result: Passport[] = [];

    let tempStrArr: string[] = [];
    for (const str of data) {
        if (str.length > 0) {
            tempStrArr.push(str);
        } else {
            const splittedPassportData = tempStrArr.join(' ');

            const passport: Passport = new Passport(splittedPassportData);
            result.push(passport);

            tempStrArr = [];
        }
    }

    return result;
};
