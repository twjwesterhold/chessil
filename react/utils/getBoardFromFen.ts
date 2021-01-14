import { isValidFen } from "./isValidFen";
import { expandEmptySquares } from "./expandEmptySquares";

export const getBoardFromFen = (fen: string) => {
    if (!isValidFen(fen)) {
        return false;
    }

    let fenTemp = fen.split(" ", 1)[0];
    fenTemp = expandEmptySquares(fenTemp);

    const rows = fenTemp.replace(/\//g, "");
    const position = [];

    for (let i = 0; i <= 63; i++) {
        position.push({
            rank: i / 8 + 1,
            file: String.fromCharCode(i % 8 + 97),
            piece: (rows.charAt(i) !== "1") ? rows.charAt(i) : "",
            isWhite: Math.floor(i/8 + i) % 2 === 0,
        });
    }

    return position;
};
