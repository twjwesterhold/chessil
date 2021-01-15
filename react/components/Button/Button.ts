import styled from "styled-components";
import { Colors, Fonts } from "../../styles";

const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 3px;
  box-sizing: border-box;
  margin-left: 10px;
  background-color: ${Colors.Cinder};
  color: ${Colors.White};
  font-family: ${Fonts.Montserrat};
  font-size: 15px;
  box-shadow: 0 1px 5px ${Colors.SilverChalice};
`;

export default Button;
