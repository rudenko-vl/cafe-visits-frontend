import { useState } from "react";
import { useSelector } from "react-redux";
import {
  getIsLoggedIn,
  getUserAdmin,
  getIsAuthorizing,
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
  BurgerMenu,
  NavItem,
} from "./Header.styled";
import { logout } from "../../redux/auth/auth-operations";
import { useDispatch } from "react-redux";
import { Modal } from "../Modal/Modal";
import { Loader } from "../Loader/Loader";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLogin } from "react-icons/md";

export const Header = () => {
  const isLogged = useSelector(getIsLoggedIn);
  const isAdmin = useSelector(getUserAdmin);
  const auth = useSelector(getIsAuthorizing);

  const [mobMenu, setMobMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };

  const closeMobMenu = () => {
    setMobMenu(false);
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
        <Navigation className={`navigate ${mobMenu ? "active" : ""}`}>
          {isLogged && (
            <NavList>
              <NavItem onClick={closeMobMenu}>
                <HeaderLink to="/main">Главная</HeaderLink>
              </NavItem>
              <NavItem onClick={closeMobMenu}>
                <HeaderLink to="/history">История</HeaderLink>
              </NavItem>
              <NavItem onClick={closeMobMenu}>
                {isAdmin && <HeaderLink to="/employes">Админ</HeaderLink>}
              </NavItem>
              <NavItem onClick={closeMobMenu}>
                <HeaderBtn
                  variant="contained"
                  color="error"
                  onClick={handleOpenModal}
                >
                  Выйти <MdOutlineLogin />
                </HeaderBtn>
              </NavItem>
            </NavList>
          )}
        </Navigation>
        {isLogged && (
          <BurgerMenu onClick={() => setMobMenu(!mobMenu)}>
            <GiHamburgerMenu />
          </BurgerMenu>
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
    </>
  );
};
