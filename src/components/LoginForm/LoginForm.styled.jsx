import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 220px;
  padding: 30px;
  outline: 1px solid white;
  border-radius: 10px;
  margin: 40px auto;
  @media screen and (min-width: 460px) {
    width: 350px;
  }
  @media screen and (min-width: 780px) {
    width: 400px;
  }
`;
export const Label = styled.label`
  font-weight: 500;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 5px;
  height: 30px;
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
  @media screen and (min-width: 780px) {
    height: 40px;
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

export const PreviewTitle = styled.h1`
  color: white;
  font-size: 16px;
  text-align: center;
  margin: 0 auto;
  padding: 10px;
  @media screen and (min-width: 480px) {
    font-size: 22px;
  }
  @media screen and (min-width: 800px) {
    font-size: 28px;
  }
`;

export const PreviewDiv = styled.div`
  padding: 0px 40px;
  background: #000000e3;
`;
export const LoginLink = styled.span`
  > a {
    color: red;
  }
`;
