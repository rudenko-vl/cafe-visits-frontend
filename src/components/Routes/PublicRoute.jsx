import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "../../redux/auth/auth-selectors";

export default function PublicRoute({ children, restricted = false }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = restricted && isLoggedIn;

  return shouldRedirect ? <Navigate to="/employes" /> : children;
}

PublicRoute.propTypes = {
  children: PropTypes.node,
  restricted: PropTypes.bool,
};
