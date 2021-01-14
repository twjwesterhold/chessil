import React, { useState } from "react";
import styled from "styled-components";

interface TextSubmitProps {
    children?: React.ReactNode;
    onSubmit: (newValue: string) => void;
}

const TextSubmit = ({ children, ...props}: TextSubmitProps) => {
    const [value, setValue] = useState("");

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
  width: 250px;
`;

const StyledButton = styled.input`
  margin-left: 10px;
`;

export default TextSubmit;
