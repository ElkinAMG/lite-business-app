import { createContext } from "react";
import useUserReducer from "./hooks/useUserReducer";

import { userState } from "./reducer";

export const userContext = createContext({
  user: userState,
  Dispatch: null,
});

export default function UserContext({ children }) {
  const userReducer = useUserReducer();
  return (
    <userContext.Provider value={userReducer}>{children}</userContext.Provider>
  );
}
