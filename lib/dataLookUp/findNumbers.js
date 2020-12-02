"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTrioThatAddsUpTo = exports.findTupleThatAddsUpTo = void 0;
const findTupleThatAddsUpTo = (target, data) => {
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
        return exports.findTupleThatAddsUpTo(target, data);
    }
    return null;
};
exports.findTupleThatAddsUpTo = findTupleThatAddsUpTo;
const findTrioThatAddsUpTo = (target, data) => {
    if (data.length > 2) {
        const head = data[0];
        data.splice(0, 1);
        const tupleTarget = target - head;
        const tuple = exports.findTupleThatAddsUpTo(tupleTarget, [...data]);
        if (tuple) {
            return {
                a: head,
                b: tuple.a,
                c: tuple.b,
            };
        }
        return exports.findTrioThatAddsUpTo(target, data);
    }
    throw new Error('no trio was found');
};
exports.findTrioThatAddsUpTo = findTrioThatAddsUpTo;
//# sourceMappingURL=findNumbers.js.map