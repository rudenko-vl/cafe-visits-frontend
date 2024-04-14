import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin: 30px auto 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85vw;
`;
export const List = styled.ul`
  padding: 15px;
  list-style: none;
`;
export const NavLink = styled(Link)`
  text-decoration: none;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  padding: 10px;
  border: 2px solid white;
  border-radius: 6px;
  background-color: #f8f7f7;
  box-shadow: 0 4px 10px black;
`;

export const TopWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
`;
export const SubTitle = styled.h3`
  color: white;
`;
