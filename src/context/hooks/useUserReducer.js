import { useEffect, useReducer } from "react";
import userReducer, { userState } from "../reducer";

import getJWT from "../utils/getJWT";

export default function useUserReducer() {
  const [userInReducer, dispatch] = useReducer(userReducer, userState);
  const Dispatch = (type, payload) => dispatch({ type, payload });

  useEffect(() => {
    Dispatch("RECOVERSESSION", { token: getJWT() });
  }, []);

  return { user: userInReducer, Dispatch };
}
