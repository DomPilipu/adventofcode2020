"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTupleThatAddsUpTo2020 = void 0;
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
    throw new Error('no number pair was found');
};
exports.findTupleThatAddsUpTo2020 = findTupleThatAddsUpTo2020;
//# sourceMappingURL=findNumberPairs.js.map