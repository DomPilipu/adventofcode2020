"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findHighestSeatId = void 0;
const findHighestSeatId = (data) => {
    let result = 0;
    for (const dataEntry of data) {
        const seatRow = getNumber(dataEntry.slice(0, 7));
        const seatNumber = getNumber(dataEntry.slice(7, 10));
    }
    return result;
};
exports.findHighestSeatId = findHighestSeatId;
const getNumber = (data) => {
    const lower = 0;
    const upper = Math.pow(2, data.length) - 1;
    for (const char of data) {
        if (char === 'F') {
        }
        if (char === 'B') {
        }
    }
    console.log(upper);
    console.log(data);
    return 0;
};
//# sourceMappingURL=findHighestSearId.js.map