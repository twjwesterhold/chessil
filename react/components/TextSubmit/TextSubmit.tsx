import React, { useState } from "react";
import styled from "styled-components";

import { Button } from "../Button";
import { Colors, Fonts } from "../../styles";

interface TextSubmitProps {
    children?: React.ReactNode;
    onSubmit: (newValue: string) => void;
    value: string;
}

const TextSubmit = ({ children, ...props}: TextSubmitProps) => {
    const [value, setValue] = useState(props.value);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        props.onSubmit(value);
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            {children}
            <StyledTextInput
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <Button onClick={handleSubmit}>
                Load
            </Button>
        </StyledForm>
    );
};

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  font-size: 20px;
`;

const StyledTextInput = styled.input`
  height: 35px;
  width: 400px;
  font-size: 15px;
  background-color: ${Colors.Iron};
  border: none;
  border-radius: 2px;
  outline: none;
  box-shadow: 0 1px 2px ${Colors.SilverChalice};
  transition-duration: 0.2s;
  
  &:focus {
    background-color: ${Colors.PattensBlue};
  }
`;

export default TextSubmit;
