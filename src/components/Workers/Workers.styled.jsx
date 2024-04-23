import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Navigate = styled(NavLink)`
  color: white;
  font-size: 20px;
  text-decoration: underline;
  &.active {
    color: #e2e207;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 30px;
  margin: 0 auto;
`;

export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 70vw;
  height: 40vh;
  background: white;
  overflow: auto;
`;

export const SubTitle = styled.h3`
  color: white;
  text-align: center;
`;

export const AddBtn = styled.span`
  cursor: pointer;
  > svg {
    color: white;
    font-size: 34px;
  }
  &:hover > span {
    opacity: 1;
  }
`;
export const Clue = styled.span`
  background: yellow;
  color: blue;
  width: 100px;
  height: 30px;
  opacity: 0;
  transition: 700ms;
  margin-left: 10px;
  padding: 5px;
  border-radius: 5px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 10px auto;
`;
