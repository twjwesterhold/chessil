import React, { useState } from "react";
import styled from "styled-components";

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
            <StyledButton type="submit" value="Load" />
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
  height: 25px;
  width: 400px;
`;

const StyledButton = styled.input`
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 800;
  padding: 5px 10px;
  border-radius: 3px;
  box-sizing: border-box;
  margin-left: 10px;
  background-color: ${Colors.Cinder};
  color: ${Colors.White};
  font-family: ${Fonts.Montserrat};
  box-shadow: 0 1px 5px ${Colors.SilverChalice};
`;

export default TextSubmit;
