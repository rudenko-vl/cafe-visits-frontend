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

import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { HeaderBox, Navigation } from "./Header.styled";

export const Header = () => {
  return (
    <>
      <HeaderBox>
        <nav>
          <Navigation>
            <Link to="/auth/login">
              <Button variant="contained" sx={{ fontWeight: "700" }}>
                Войти
              </Button>
            </Link>
            <Link to="/employes">
              <Button sx={{ fontWeight: "700" }} variant="contained">
                Главная
              </Button>
            </Link>
            <Link to="/new">
              <Button sx={{ fontWeight: "700" }} variant="contained">
                New
              </Button>
            </Link>
          </Navigation>
        </nav>
      </HeaderBox>
    </>
  );
};
