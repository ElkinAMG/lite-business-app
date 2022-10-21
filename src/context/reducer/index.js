import { LoginUser, SigninUser } from "../api/auth";

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
    LOGIN: () => {
      try {
        LoginUser(action.payload).then(({ token }) => {
          localStorage.setItem("user-token", token);
        });
        return { ...state, isLoggedIn: true };
      } catch (err) {
        throw err;
      }
    },
    SIGNUP: () => {
      try {
        SigninUser(action.payload).then(({ token }) => {
          localStorage.setItem("user-token", token);
        });
        return { ...state, isLoggedIn: true };
      } catch (err) {
        throw err;
      }
    },
    RECOVERSESSION: () => {
      // console.log("token? ", !!action.payload?.token);
      return { ...state, isLoggedIn: !!action.payload?.token };
    },
  };

  return actionTypes[action.type]() ?? state;
}
