import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export const HeaderBox = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 64px;
  padding: 0 40px;
  color: #fff;
  background-color: #151545;
  box-shadow: 2px 2px 14px 0px #fff;
`;
export const Navigation = styled.nav`
  margin-left: auto;
  @media (max-width: 700px) {
    position: fixed;
    width: 250px;
    height: 100%;
    top: 0;
    left: -260px;
    display: flex;
    flex-direction: column;
    background: #454343;
    transition: transform 0.3s linear;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  @media (max-width: 700px) {
    flex: 1;
    flex-direction: column;
    padding: 0px 40px;
  }
`;

export const NavItem = styled.li`
  :nth-of-type(n + 2) {
    margin-left: 20px;
  }
  @media (max-width: 700px) {
    margin: 20px 0px;
    :nth-of-type(n + 2) {
      margin-left: 0;
    }
  }
`;

export const BtnBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-top: 30px;
`;

export const HeaderBtn = styled(Button)`
  font-weight: 700;
`;

export const HeaderLink = styled(NavLink)`
  font-size: 22px;
  font-weight: 700;
  color: white;
  transition: transform 700ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.1);
  }
  :not(last-child) {
    margin-right: 15px;
  }

  &.active {
    color: #e2e207;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

export const Flag = styled.div`
  width: 40px;
  height: 25px;
  background-image: linear-gradient(to bottom, #230cf7 50%, #f2f20d 50%);
`;

export const LogoImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const LogoTxt = styled.span`
  color: #f52a2a;
  font-size: 18px;
  font-style: italic;
  font-weight: 600;
  line-height: 1.2;
  margin: 0px 15px;
`;

export const BurgerMenu = styled.div`
  cursor: pointer;
  display: block;
  @media screen and (min-width: 700px) {
    display: none;
  }
  > svg {
    color: #ffffff;
    font-size: 28px;
    &:hover {
      color: #c6c6c6;
    }
  }
`;
