import { useState, Fragment } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getIsAuthorizing } from "../../redux/auth/auth-selectors";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Stack,
  Button,
} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import { AiOutlineMail } from "react-icons/ai";
// import { MdOutlineLogout } from "react-icons/md";
import "./UserMenu.css";
import { deepPurple } from "@mui/material/colors";
import { Link } from "react-router-dom";
// import { logout } from "../../redux/auth/auth-operations";
// import { Modal, Loader } from "../../components";
// import { BtnBox } from "../UpdateDevice/UpdateDevice.styled";

export const UserMenu = () => {
  const [state, setState] = useState({
    right: false,
  });
  //   const dispatch = useDispatch();
  //   const logOut = () => {
  //     dispatch(logout());
  //   };

  //   const name = useSelector(getUserName);
  //   const email = useSelector(getUserEmail);
  //   console.log(name, email);

  //   const auth = useSelector(getIsAuthorizing);
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  //   const handleOpenModal = () => setIsModalOpen(true);
  //   const handleCloseModal = () => setIsModalOpen(false);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "250px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <Stack direction="row" spacing={2}>
            <Avatar
              sx={{ bgcolor: deepPurple[300] }}
              alt={"name"}
              src="/broken-image.jpg"
            ></Avatar>
            <ListItemText primary={"name"} />
          </Stack>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AiOutlineMail />
          </ListItemIcon>
          <ListItemText primary={"email"} />
        </ListItem>
        {/* <Button
          variant="contained"
          color="error"
            onClick={handleOpenModal}
          startIcon={<MdOutlineLogout />}
          sx={{ ml: "80px", mt: "15px" }}
        >
          Выйти
        </Button> */}
        <Link to="/admin">
          <Button sx={{ fontWeight: "700" }} variant="contained">
            Admin
          </Button>
        </Link>
      </List>
    </Box>
  );
  return (
    <Stack
      spacing={3}
      direction="row"
      sx={{ ml: "auto", alignItems: "center" }}
    >
      <div>
        {["right"].map((anchor) => (
          <Fragment key={anchor}>
            <Avatar
              sx={{ cursor: "pointer" }}
              src="/broken-image.jpg"
              onClick={toggleDrawer(anchor, true)}
            ></Avatar>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </Fragment>
        ))}
      </div>
      {/* <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h1>Хотите выйти?</h1>
        <BtnBox>
          <Button variant="contained" color="success" onClick={logOut}>
            {auth === "loading" ? <Loader size={20} /> : "Да"}
          </Button>
          <Button
            sx={{ marginLeft: "15px" }}
            variant="contained"
            color="error"
            onClick={handleCloseModal}
          >
            Нет
          </Button>
        </BtnBox>
      </Modal> */}
    </Stack>
  );
};
