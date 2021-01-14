import React from "react";
import styled from "styled-components";

import { Board } from "../../components"

const BoardEditorPage = () => {
    return (
        <StyledDiv>
            <Board />
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
