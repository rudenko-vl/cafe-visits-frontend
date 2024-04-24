import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Navigate = styled(NavLink)`
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

export const Wrapper = styled.div`
  padding: 20px;
  margin: 0 auto;
  width: 90vw;
  @media screen and (min-width: 720px) {
    padding: 30px;
    width: 80vw;
  }
  @media screen and (min-width: 1200px) {
    width: 70vw;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const DelBtn = styled.span`
  cursor: pointer;
  > svg {
    color: #f20909;
    font-size: 24px;
    &:hover {
      color: #a80b03;
    }
  }
`;
export const UpdBtn = styled(DelBtn)`
  > svg {
    color: #008028;
    &:hover {
      color: #05be18;
    }
  }
`;
export const Box = styled.div`
  border: 2px solid white;
  border-radius: 8px;
  padding: 10px;
`;
export const WorkersList = styled.div`
  list-style: none;
  padding: 20px;
  height: 40vh;
  background: white;
  overflow: auto;
`;

export const SubTitle = styled.h3`
  color: white;
  text-align: center;
  font-size: 15px;
  @media screen and (min-width: 720px) {
    font-size: 20px;
  }
`;

export const AddBtn = styled.span`
  cursor: pointer;
  > svg {
    color: white;
    font-size: 26px;
    @media screen and (min-width: 720px) {
      font-size: 34px;
    }
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 10px auto;
`;

export const ExcelBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  transition: 1.5s;
  > svg {
    color: white;
    font-size: 22px;
  }
  & :hover {
    color: green;
  }
`;
