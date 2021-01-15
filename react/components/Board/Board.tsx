import React from "react";
import styled from "styled-components";

import { Square } from "../../components";
import { Colors, Size } from "../../styles";

import { getBoardFromFen } from "../../utils";

interface BoardProps {
    fen: string;
}

const Board = ({ fen }: BoardProps) => {
    const boardArray = getBoardFromFen(fen);

    const squares = (!!boardArray && boardArray.map((el) => {
        return (
            <Square
                isWhite={el.isWhite}
            >
                {el.piece}
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

export default Board;
