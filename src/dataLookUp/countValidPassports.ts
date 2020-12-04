import { Passport } from '../dataParser/models/passport.model';

export const countValidPassports = (passports: Passport[]): number => {
    let result = 0;

    for (const passport of passports) {
        if (passport.isValid()) {
            result++;
        }
    }

    return result;
};
