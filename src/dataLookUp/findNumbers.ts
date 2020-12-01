import { INumberTrio } from './interfaces/numberTrio.interface';
import { INumberTuple } from './interfaces/numberTuple.interface';

export const findTupleThatAddsUpTo2020 = (data: number[]): INumberTuple => {
    if (data.length > 1) {
        const head = data[0];
        data.splice(0, 1);

        for (const num of data) {
            if (head + num === 2020) {
                return {
                    a: head,
                    b: num,
                };
            }
        }
        return findTupleThatAddsUpTo2020(data);
    }
    throw new Error('no tuple was found');
};

const findTuplesThatAddsUpToLessThan2020 = (data: number[]): INumberTuple[] => {
    let result: INumberTuple[] = [];

    if (data.length > 1) {
        const head = data[0];
        data.splice(0, 1);

        for (const num of data) {
            if (head + num < 2020) {
                result.push({
                    a: head,
                    b: num,
                });
            }
        }

        result = result.concat(findTuplesThatAddsUpToLessThan2020(data));
    }

    return result;
};

export const findTrioThatAddsUpTo2020 = (data: number[]): INumberTrio => {
    if (data.length > 2) {
        const head = data[0];
        data.splice(0, 1);

        const tuples = findTuplesThatAddsUpToLessThan2020([...data]);
        for (const tuple of tuples) {
            if (head + tuple.a + tuple.b === 2020) {
                return {
                    a: head,
                    b: tuple.a,
                    c: tuple.b,
                };
            }
        }
        return findTrioThatAddsUpTo2020(data);
    }

    throw new Error('no trio was found');
};
