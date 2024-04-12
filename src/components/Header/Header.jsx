// import { useSelector } from "react-redux";
// import { Link, useLocation } from "react-router-dom";
// import { Button } from "@mui/material";
// import { getIsLoggedIn } from "../../redux/auth/auth-selectors";
// import { HeaderBox, Navigation } from "./Header.styled";
// import { UserMenu, Filter } from "../../components";
// import { getFilter } from "../../redux/filter/selectors";

// export const Header = () => {
//   const logged = useSelector(getIsLoggedIn);
//   const value = useSelector(getFilter);
//   const location = useLocation();
//     const filteredDevices =
//       devices?.length > 0
//         ? devices.filter((item) =>
//             (
//               item.position +
//               item.sn +
//               item.model +
//               item.place +
//               item.owner +
//               item.uz
//             )
//               .toLowerCase()
//               .includes(value.trim().toLowerCase())
//           )
//         : [];

//   return (
//     <>
//       <HeaderBox>
//         {location.pathname === "/employes" ? (
//           <Link to="/new">
//             <Button
//               sx={{ width: "220px", height: "40px", fontWeight: "700" }}
//               variant="contained"
//             >
//               Добавить запись
//             </Button>
//           </Link>
//         ) : (
//           <Link to="/devices">
//             <Button sx={{ fontWeight: "700" }} variant="contained">
//               Главная
//             </Button>
//           </Link>
//         )}
//         {logged && <Filter value={value} />}
//         <nav>
//           <Navigation>
//             {logged && (
//               <Link to="/settings">
//                 <Button
//                   sx={{ fontWeight: "700", marginRight: "30px" }}
//                   variant="contained"
//                 >
//                   Настройки
//                 </Button>
//               </Link>
//             )}
//             {logged ? (
//               <UserMenu />
//             ) : (
//               <Link to="/auth/login">
//                 <Button variant="contained" sx={{ fontWeight: "700" }}>
//                   Войти
//                 </Button>
//               </Link>
//             )}
//           </Navigation>
//         </nav>
//       </HeaderBox>
//       {location.pathname === "/devices" ? (
//         <DevicesList data={filteredDevices} />
//       ) : null}
//     </>
//   );
// };

import { useSelector } from "react-redux";
import { getIsLoggedIn, getUserAdmin } from "../../redux/auth/auth-selectors";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { HeaderBox, Navigation } from "./Header.styled";
import { logout } from "../../redux/auth/auth-operations";
import { useDispatch } from "react-redux";
// import { UserMenu } from "../UserMenu/UserMenu";

export const Header = () => {
  const isLogged = useSelector(getIsLoggedIn);
  const isAdmin = useSelector(getUserAdmin);

  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <HeaderBox>
        <Navigation>
          <Link to="/employes">
            <Button sx={{ fontWeight: "700" }} variant="contained">
              Главная
            </Button>
          </Link>
          <Link style={{ color: "red", fontSize: "28px" }} to="/history">
            <Button sx={{ fontWeight: "700" }} variant="contained">
              History
            </Button>
          </Link>
          {!isLogged ? (
            <Link to="/auth/login">
              <Button variant="contained" sx={{ fontWeight: "700" }}>
                Войти
              </Button>
            </Link>
          ) : (
            <Button variant="contained" color="success" onClick={logOut}>
              Log Out
            </Button>
          )}
        </Navigation>
        {isAdmin && (
          <Link to="/admin">
            <Button sx={{ fontWeight: "700" }} variant="contained">
              Admin
            </Button>
          </Link>
        )}
      </HeaderBox>
    </>
  );
};
