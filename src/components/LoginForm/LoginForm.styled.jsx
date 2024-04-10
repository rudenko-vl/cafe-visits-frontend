import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 30px;
  outline: 1px solid white;
  border-radius: 10px;
  margin: 40px auto;
`;
export const Label = styled.label`
  font-weight: 500;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 5px;
  height: 40px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: border-color;
  transition-duration: 500ms;
  :focus {
    outline: none;
    border-color: green;
  }
  :hover {
    border-color: green;
  }
`;

export const Text = styled.p`
  text-align: center;
  color: white;
  margin-top: 10px;
`;
export const RegNav = styled(Link)`
  color: white;
  text-decoration: underline;
  font-weight: 700;
`;
