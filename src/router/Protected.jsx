import { useContext } from "react";
import { userContext } from "../context";

import getJWT from "../context/utils/getJWT";

import { Navigate } from "react-router-dom";
import { useEffect } from "react";

export default function Protected({
  children,
  route = "/",
  denegateOnLogged = false,
}) {
  const { user, Dispatch } = useContext(userContext);

  useEffect(() => {
    if (user instanceof Promise) {
      user.then((data) => Dispatch("UNPROMISE", data));
    }
  }, [user, Dispatch]);

  if (denegateOnLogged && user.isLoggedIn)
    return <Navigate to={route} replace />;

  if (!denegateOnLogged && !user.isLoggedIn && !getJWT())
    return <Navigate to={route} replace />;

  return children;
}
