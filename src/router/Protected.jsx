import { useContext } from "react";
import { userContext } from "../context";

import { Navigate } from "react-router-dom";

export default function Protected({
  children,
  route = "/",
  denegateOnLogged = false,
}) {
  const { user } = useContext(userContext);

  if (denegateOnLogged && user.isLoggedIn)
    return <Navigate to={route} replace />;

  if (!denegateOnLogged && !user.isLoggedIn)
    return <Navigate to={route} replace />;

  return children;
}
