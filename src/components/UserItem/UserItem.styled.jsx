import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  color: white;
  font-size: 15px;
  text-decoration: underline;
  &.active {
    color: #e2e207;
  }
  @media screen and (min-width: 720px) {
    font-size: 20px;
  }
`;

export const List = styled.ul`
  background-color: white;
  margin: 30px auto;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
`;

export const Item = styled.li`
  outline: 2px solid gray;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;
  @media (max-width: 719px) {
    flex-direction: column;
  }
`;

export const AdminLabel = styled.p`
  color: black;
  font-weight: 600;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 30px;
  margin: 0 auto;
`;

export const Box = styled.div`
  border: 2px solid white;
  border-radius: 8px;
  padding: 10px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-around;
  width: 100%;
  margin: 10px auto;
`;
export const UserNumber = styled.p`
  color: #11011a;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Clue = styled.span`
  > svg {
    color: white;
    font-size: 20px;
  }
`;
