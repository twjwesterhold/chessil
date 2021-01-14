import { expandEmptySquares } from "./expandEmptySquares";

export const isValidFen = (fen: string) => {
    // cut off move and castling data
    let fenTest = fen.split(" ", 1)[0];
    // expand empty squares
    fenTest = expandEmptySquares(fenTest);

    // separate into chunks
    const ranks = fenTest.split("/");

    // check that fen represents exactly 8 rows
    if (ranks.length !== 8) {
        return false;
    }

    // check each row contains only valid FEN characters and is 8 characters long
    for (let i = 0; i < 8; i++) {
        if (ranks[i].length !== 8 ||
            ranks[i].search(/[^pnbrqk1]/i) !== -1) {
            return false;
        }
    }

    // will be valid here, ignoring move and castling data at this point in development
    return true;
};
