"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countTrees = void 0;
const countTrees = (data, right, down) => {
    const length = data[0].squares.length;
    let xPos = right;
    let yPos = down;
    let treeCount = 0;
    while (yPos < data.length) {
        if (data[yPos].squares[xPos % length] === '#') {
            treeCount++;
        }
        xPos += right;
        yPos += down;
    }
    return treeCount;
};
exports.countTrees = countTrees;
//# sourceMappingURL=countTrees.js.map