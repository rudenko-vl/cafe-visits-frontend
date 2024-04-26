import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getIsLoggedIn,
  getUserAdmin,
  getIsAuthorizing,
  getUserName,
  getUserEmail,
} from "../../redux/auth/auth-selectors";
import {
  HeaderBox,
  Navigation,
  BtnBox,
  HeaderBtn,
  HeaderLink,
  NavList,
  Flag,
  Logo,
  LogoImg,
  LogoTxt,
  NavItem,
  MobNavigation,
  MobNavList,
  MobNavItem,
  DrawerText,
  ExitBtn,
} from "./Header.styled";
import { logout } from "../../redux/auth/auth-operations";
import { Modal, Loader } from "../../components";
import { Link } from "react-router-dom";
import { MdOutlineLogin } from "react-icons/md";
import { Avatar, Box, Drawer } from "@mui/material";

export const Header = () => {
  const isLogged = useSelector(getIsLoggedIn);
  const isAdmin = useSelector(getUserAdmin);
  const auth = useSelector(getIsAuthorizing);
  const name = useSelector(getUserName);
  const email = useSelector(getUserEmail);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };

  const style = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    background: "#31313b",
    alignItems: "center",
    gap: "15px",
    padding: "30px 20px",
  };

  return (
    <>
      <HeaderBox>
        <Link to="/main">
          <Logo>
            <LogoImg src="/warehouse.png" alt="logo" />
            <LogoTxt>
              <span>Vesko</span> <br />
              <span style={{ color: "#979797" }}>Invest</span>
            </LogoTxt>
            <Flag></Flag>
          </Logo>
        </Link>
        <Navigation>
          {isLogged && (
            <NavList>
              <NavItem>
                <HeaderLink to="/main">Главная</HeaderLink>
              </NavItem>
              <NavItem>
                <HeaderLink to="/history">История</HeaderLink>
              </NavItem>
              <NavItem>
                {isAdmin && <HeaderLink to="/employes">Админ</HeaderLink>}
              </NavItem>
            </NavList>
          )}
        </Navigation>
        {isLogged && (
          <Avatar
            sx={{ cursor: "pointer", marginLeft: "auto" }}
            src="/broken-image.jpg"
            onClick={toggleDrawer(true)}
          />
        )}
      </HeaderBox>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h1>Хотите выйти?</h1>
        <BtnBox>
          <HeaderBtn variant="contained" color="success" onClick={logOut}>
            {auth === "loading" ? <Loader size={20} /> : "Да"}
          </HeaderBtn>
          <HeaderBtn
            sx={{ marginLeft: "15px" }}
            variant="contained"
            color="error"
            onClick={handleCloseModal}
          >
            Нет
          </HeaderBtn>
        </BtnBox>
      </Modal>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        <Box sx={style} role="presentation" onClick={toggleDrawer(false)}>
          <p style={{ fontSize: "30px", marginBottom: "15px" }}>🥗 🍛 🍵</p>
          <DrawerText>Привет, {name} 🖐️</DrawerText>
          <DrawerText>✉️ {email}</DrawerText>
          <MobNavigation>
            {isLogged && (
              <MobNavList>
                <MobNavItem>
                  <HeaderLink to="/main">Главная</HeaderLink>
                </MobNavItem>
                <MobNavItem>
                  <HeaderLink to="/history">История</HeaderLink>
                </MobNavItem>
                <MobNavItem>
                  {isAdmin && <HeaderLink to="/employes">Админ</HeaderLink>}
                </MobNavItem>
              </MobNavList>
            )}
          </MobNavigation>
          <ExitBtn variant="contained" color="error" onClick={handleOpenModal}>
            Выйти <MdOutlineLogin />
          </ExitBtn>
        </Box>
      </Drawer>
    </>
  );
};
