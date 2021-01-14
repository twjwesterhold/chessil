import React, { useState } from "react";
import styled from "styled-components";

import { Board, TextSubmit } from "../../components"

import { isValidFen } from "../../utils";

const BoardEditorPage = () => {
    const [fen, setFen] = useState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");

    const handleSubmit = (value: string) => {
        if (!isValidFen(value)) {
            alert(`${value} is not a valid FEN`);
        } else {
            setFen(value);
        }
    }

    return (
        <StyledDiv>
            <Board fen={fen} />
            <TextSubmit onSubmit={handleSubmit}>
                FEN:&nbsp;&nbsp;
            </TextSubmit>
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1000px;
  width: 100%;
`;

export default BoardEditorPage;
