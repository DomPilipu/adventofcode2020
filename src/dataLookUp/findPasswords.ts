import { IPasswordDataEntry } from '../input/interfaces/corruptedPasswordDataEntry.interface';

export const findValidPasswordsOldPolicy = (data: IPasswordDataEntry[]): IPasswordDataEntry[] => {
    return findValidPasswords(data, (entry, result) => {
        const passwordFilteredDownToPolicyChar = entry.password.split('').filter((char) => char === entry.policy.char);
        if (
            passwordFilteredDownToPolicyChar.length >= entry.policy.firstNumber &&
            passwordFilteredDownToPolicyChar.length <= entry.policy.lastNumber
        ) {
            result.push(entry);
        }
    });
};

export const findValidPasswordsNewPolicy = (data: IPasswordDataEntry[]): IPasswordDataEntry[] => {
    return findValidPasswords(data, (entry, result) => {
        if (
            (entry.password.charAt(entry.policy.firstNumber - 1) === entry.policy.char) !==
            (entry.password.charAt(entry.policy.lastNumber - 1) === entry.policy.char)
        ) {
            result.push(entry);
        }
    });
};

const findValidPasswords = (data: IPasswordDataEntry[], validationFunc: Function): IPasswordDataEntry[] => {
    const result: IPasswordDataEntry[] = [];

    for (const entry of data) {
        validationFunc(entry, result);
    }

    return result;
};
