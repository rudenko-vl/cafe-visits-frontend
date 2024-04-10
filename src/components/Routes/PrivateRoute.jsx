import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";

export default function PrivateRoute({ children, navigateTo = "/" }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={navigateTo} />;
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
  navigateTo: PropTypes.string,
};
