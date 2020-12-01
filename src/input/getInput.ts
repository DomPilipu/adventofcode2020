import fs from 'fs';

export const getInput = (file: string): string => {
    try {
        const data = fs.readFileSync('./input/' + file + '.txt', 'utf8');
        return data;
    } catch (error) {
        console.log(error);
    }
};
