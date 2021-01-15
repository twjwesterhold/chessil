import React, { useState } from "react";
import styled from "styled-components";
import queryString from "query-string";

import { RouteComponentProps } from "react-router";

import { Board, TextSubmit } from "../../components"
import { isValidFen } from "../../utils";
import { DEFAULT_FEN } from "../../constants";

interface BoardEditorPageProps extends RouteComponentProps {
    fen: string;
}

const BoardEditorPage = (props: BoardEditorPageProps) => {
    const fenRedirect = queryString.parse(props.location.search).fen as string;
    const [fen, setFen] = useState(fenRedirect || DEFAULT_FEN);

    const handleSubmit = (value: string) => {
        if (!isValidFen(value)) {
            alert(`${value} is not a valid FEN`);
        } else {
            setFen(value);
        }
    }

    return (
        <BodyContent>
            <Board fen={fen} />
            <TextSubmit onSubmit={handleSubmit} value={fen}>
                FEN:&nbsp;&nbsp;
            </TextSubmit>
        </BodyContent>
    );
};

const BodyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1000px;
  width: 100%;
`;

export default BoardEditorPage;
