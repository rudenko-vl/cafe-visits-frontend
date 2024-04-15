import { useState } from "react";
import { useSelector } from "react-redux";
import {
  getIsLoggedIn,
  getUserAdmin,
  getIsAuthorizing,
} from "../../redux/auth/auth-selectors";
import { Link } from "react-router-dom";
import { HeaderBox, Navigation, BtnBox, HeaderBtn } from "./Header.styled";
import { logout } from "../../redux/auth/auth-operations";
import { useDispatch } from "react-redux";
import { Modal } from "../Modal/Modal";
import { Loader } from "../Loader/Loader";

export const Header = () => {
  const isLogged = useSelector(getIsLoggedIn);
  const isAdmin = useSelector(getUserAdmin);
  const auth = useSelector(getIsAuthorizing);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <HeaderBox>
        <Navigation>
          {isLogged && (
            <div>
              <Link to="/main">
                <HeaderBtn sx={{ marginRight: "30px" }} variant="contained">
                  Главная
                </HeaderBtn>
              </Link>
              <Link to="/history">
                <HeaderBtn variant="contained">История</HeaderBtn>
              </Link>
            </div>
          )}
          {!isLogged ? (
            <Link to="/auth/login">
              <HeaderBtn color="success" variant="contained">
                Вход
              </HeaderBtn>
            </Link>
          ) : (
            <HeaderBtn
              variant="contained"
              color="error"
              onClick={handleOpenModal}
            >
              Выйти
            </HeaderBtn>
          )}
        </Navigation>
        {isAdmin && (
          <Link to="/employes">
            <HeaderBtn sx={{ marginLeft: "30px" }} variant="contained">
              Admin
            </HeaderBtn>
          </Link>
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
