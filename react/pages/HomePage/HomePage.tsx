import React from "react";
import styled from "styled-components";

import { TextSubmit } from "../../components";
import { Fonts } from "../../styles";

const HomePage = () => {
    const handleSubmit = (value: string) => {
        return value;
    };

    return (
        <BodyContent>
            <Header>
                Home Page
            </Header>
            <TextSubmit onSubmit={handleSubmit} value="">
                Enter a valid FEN:&nbsp;&nbsp;
            </TextSubmit>
        </BodyContent>
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

export default HomePage;
