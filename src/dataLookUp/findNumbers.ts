import { INumberTrio } from './interfaces/numberTrio.interface';
import { INumberPair } from './interfaces/numberPair.interface';

export const findTupleThatAddsUpTo = (target: number, data: number[]): INumberPair => {
    if (data.length > 1) {
        const head = data[0];
        data.splice(0, 1);

        for (const num of data) {
            if (head + num === target) {
                return {
                    a: head,
                    b: num,
                };
            }
        }
        return findTupleThatAddsUpTo(target, data);
    }
    return null;
};

export const findTrioThatAddsUpTo = (target: number, data: number[]): INumberTrio => {
    if (data.length > 2) {
        const head = data[0];
        data.splice(0, 1);

        const tupleTarget = target - head;

        const tuple = findTupleThatAddsUpTo(tupleTarget, [...data]);
        if (tuple) {
            return {
                a: head,
                b: tuple.a,
                c: tuple.b,
            };
        }
        return findTrioThatAddsUpTo(target, data);
    }

    throw new Error('no trio was found');
};
