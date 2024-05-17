import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn, error } = useAuth();

  const isAuthenticated = isLoggedIn && !error;

  return isAuthenticated ? <Navigate to={redirectTo} /> : Component;
};
export default RestrictedRoute;
