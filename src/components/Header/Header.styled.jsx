import styled from "@emotion/styled";

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
  background-color: blue;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const Navigation = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;
export const NavItem = styled.li`
  :not(last-child) {
    margin-right: 15px;
  }
`;
