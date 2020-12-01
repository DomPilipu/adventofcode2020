"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTrioThatAddsUpTo2020 = exports.findTupleThatAddsUpTo2020 = void 0;
const findTupleThatAddsUpTo2020 = (data) => {
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
        return exports.findTupleThatAddsUpTo2020(data);
    }
    throw new Error('no tuple was found');
};
exports.findTupleThatAddsUpTo2020 = findTupleThatAddsUpTo2020;
const findTuplesThatAddsUpToLessThan2020 = (data) => {
    let result = [];
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
const findTrioThatAddsUpTo2020 = (data) => {
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
        return exports.findTrioThatAddsUpTo2020(data);
    }
    throw new Error('no trio was found');
};
exports.findTrioThatAddsUpTo2020 = findTrioThatAddsUpTo2020;
//# sourceMappingURL=findNumbers.js.map