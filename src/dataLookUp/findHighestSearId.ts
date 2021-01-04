export const findHighestSeatId = (data: string[][]): number => {
    let result = 0;

    for (const dataEntry of data) {
        const seatRow = getNumber(dataEntry.slice(0, 7));
        const seatNumber = getNumber(dataEntry.slice(7, 10));
    }

    return result;
};

const getNumber = (data: string[]): number => {
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
