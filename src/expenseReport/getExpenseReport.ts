import { getInput } from '../input/getInput';

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
