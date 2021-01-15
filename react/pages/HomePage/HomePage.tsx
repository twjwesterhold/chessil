import React, { useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import { Button, TextSubmit } from "../../components";
import { Fonts } from "../../styles";
import { isValidFen } from "../../utils";
import { DEFAULT_FEN, EMPTY_FEN } from "../../constants";

const HomePage = () => {
    const [toBoard, setToBoard] = useState(false);
    const [fen, setFen] = useState("");

    const handleSubmit = (value: string) => {
        if (!isValidFen(value)) {
            alert(`${value} is not a valid FEN`);
        } else {
            setFen(value);
            setToBoard(true);
        }
    };

    const handleClick = (value: string) => {
        setFen(value);
        setToBoard(true);
    };

    return (
        toBoard ? (
            <Redirect
                to={{
                    pathname: "/board-editor",
                    search: `?fen=${fen.split(" ")[0]}`,
                }}
            />
        ) : (
            <BodyContent>
                <Header>
                    Home Page
                </Header>
                <TextSubmit onSubmit={handleSubmit} value={fen}>
                    Enter a valid FEN:&nbsp;&nbsp;
                </TextSubmit>
                <Defaults>
                    <Button onClick={() => handleClick(DEFAULT_FEN)}>
                        Starting Board
                    </Button>
                    <Button onClick={() => handleClick(EMPTY_FEN)}>
                        Empty Board
                    </Button>
                </Defaults>
            </BodyContent>
        )
    );
};

const Header = styled.h1`
  font-family: ${Fonts.Montserrat};
`;

const BodyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Defaults = styled.div`
  display: flex;
  margin: 20px;
`;

export default HomePage;
