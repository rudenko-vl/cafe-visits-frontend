import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export const HeaderBox = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 64px;
  padding: 0 10px;
  color: #fff;
  background-color: #151545;
  box-shadow: 2px 2px 14px 0px #fff;
  @media screen and (min-width: 480px) {
    padding: 0 20px;
  }
  @media screen and (min-width: 720px) {
    padding: 0 40px;
  }
`;
export const Navigation = styled.nav`
  display: none;
  @media screen and (min-width: 720px) {
    display: block;
  }
`;

export const MobNavigation = styled.nav`
  display: block;
  @media screen and (min-width: 720px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
`;

export const MobNavList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`;

export const NavItem = styled.li`
  :nth-of-type(n + 2) {
    margin-left: 20px;
  }
`;

export const MobNavItem = styled.li`
  :not(last-child) {
    margin-bottom: 15px;
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
  font-weight: 600;
  > svg {
    color: #ffffff;
    font-size: 20px;
  }
`;

export const ExitBtn = styled(HeaderBtn)`
  @media screen and (min-width: 720px) {
    margin-top: 147px;
  }
`;

export const HeaderLink = styled(NavLink)`
  font-size: 18px;
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

export const DrawerText = styled.p`
  font-size: 22px;
  font-style: italic;
  font-weight: 600;
`;
