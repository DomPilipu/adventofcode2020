import fs from 'fs';
import { IPasswordDataEntry } from './interfaces/corruptedPasswordDataEntry.interface';

const getInput = (file: string): string => {
    try {
        const data = fs.readFileSync('./input/' + file + '.txt', 'utf8');
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getExpenseReport = (): number[] => {
    const result: number[] = [];

    const data = getInput('1');

    const dataSplitted = data.split(/\r?\n/);
    for (const strNumber of dataSplitted) {
        const parseResult = parseInt(strNumber);
        result.push(parseResult);
    }

    return result;
};

export const getCorruptedPasswordData = (): IPasswordDataEntry[] => {
    const result: IPasswordDataEntry[] = [];

    const data = getInput('2');
    const dataSplitted = data.split(/\r?\n/);

    for (const dataEntry of dataSplitted) {
        const dataEntrySplitted = dataEntry.split(' ');

        const minMaxSplit = dataEntrySplitted[0].split('-');

        result.push({
            policy: {
                firstNumber: parseInt(minMaxSplit[0]),
                lastNumber: parseInt(minMaxSplit[1]),
                char: dataEntrySplitted[1].replace(':', ''),
            },
            password: dataEntrySplitted[2],
        });
    }

    return result;
};
