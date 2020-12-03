import { IMapRow } from '../input/interfaces/mapRow.interface';

export const countTrees = (data: IMapRow[], right: number, down: number): number => {
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
