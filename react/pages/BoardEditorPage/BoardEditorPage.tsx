import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BoardEditorPage = () => {
    return (
        <div>
            <div>
                This is the board editor page.
            </div>
            <Link to="/">
                Go to home page.
            </Link>
            <StyledDiv>
                Hello
            </StyledDiv>
        </div>
    );
};

const StyledDiv = styled.div`
  background-color: darksalmon;
  height: 1000px;
  width: 100%;
`;

export default BoardEditorPage;
