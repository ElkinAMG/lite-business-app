import Axios from "./axiosInstance";

/**
 * @typedef {Promise<{ auth: boolean, token: string }>} jwt It's the response expected from API
 */

/**
 * @returns {jwt}
 */
export function LoginUser({ email, password }) {
  return Axios().post("login", { email, password });
}

/**
 * @returns {jwt}
 */
export async function SigninUser({ email, password }) {
  await Axios().post("register", { email, password });
}
