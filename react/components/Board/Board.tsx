import React from "react";
import styled from "styled-components";
import {
    FaChessPawn,
    FaChessKnight,
    FaChessBishop,
    FaChessRook,
    FaChessQueen,
    FaChessKing,
} from "react-icons/fa";

import { Square } from "../../components";
import { Colors, Size } from "../../styles";
import { getBoardFromFen } from "../../utils";

interface BoardProps {
    fen: string;
}

const Board = ({ fen }: BoardProps) => {
    const boardArray = getBoardFromFen(fen);

    const pieceArray: {[index: string]: JSX.Element | null} = {
        p: <FaChessPawn />,
        n: <FaChessKnight />,
        b: <FaChessBishop />,
        r: <FaChessRook />,
        q: <FaChessQueen />,
        k: <FaChessKing />,
        P: <FaChessPawn />,
        N: <FaChessKnight />,
        B: <FaChessBishop />,
        R: <FaChessRook />,
        Q: <FaChessQueen />,
        K: <FaChessKing />,
    };

    const squares = (!!boardArray && boardArray.map((el) => {
        return (
            <Square
                isWhite={el.isWhite}
            >
                <IconContainer isWhite={el.piece === el.piece.toUpperCase()}>
                    {pieceArray[el.piece]}
                </IconContainer>
            </Square>
        );
    }));

    return (
        <StyledBoard>
            {squares}
        </StyledBoard>
    );
};

const StyledBoard = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: ${Size.SquareSize * 8}px;
  height: ${Size.SquareSize * 8}px;
  box-shadow: 1px 1px 5px 2px ${Colors.SilverChalice};
`;

interface IconProps {
    isWhite: boolean;
};

const IconContainer = styled.div<IconProps>`
  font-size: 38px;
  filter: drop-shadow(0 0 4px ${props => props.isWhite ? Colors.White : Colors.Black});
  color: ${props => props.isWhite ? Colors.Black : Colors.White};
  z-index: 1;
  margin-top: 8px;
`;

export default Board;
