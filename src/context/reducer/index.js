import { LoginUser, SigninUser } from "../api/auth";

import Swal from "sweetalert2";

export const userState = {
  email: null,
  isLoggedIn: false,
};

/**
 * @typedef {{ type: string, payload: any }} actionType
 */

/**
 * @param {userState} state It's the main user state
 * @param {actionType} action It's the action being called for performing a job
 */

export default function userReducer(state, action) {
  const actionTypes = {
    UNPROMISE: () => {
      return { ...state, ...action.payload };
    },
    LOGIN: async () =>
      LoginUser(action.payload)
        .then(({ data }) => {
          localStorage.setItem("user-token", data.token);
          return { ...state, isLoggedIn: data.auth };
        })
        .catch(() =>
          Swal.fire({
            title: "Error",
            text: "Las credenciales ingresadas no son correctas",
            icon: "error",
            confirmButtonText: "OK",
          })
        ),
    SIGNUP: () =>
      SigninUser(action.payload).then(({ token }) => {
        localStorage.setItem("user-token", token);
        return { ...state, isLoggedIn: true };
      }),
    SIGNOUT: () => {
      localStorage.removeItem("user-token");
      return { ...state, isLoggedIn: false };
    },
    RECOVERSESSION: () => {
      return { ...state, isLoggedIn: !!action.payload?.token };
    },
  };

  return actionTypes[action.type]() ?? state;
}
