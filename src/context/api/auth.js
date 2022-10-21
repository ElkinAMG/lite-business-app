import axiosClient from "./axiosInstance";

/**
 * @typedef {Promise<{ auth: boolean, token: string }>} jwt It's the response expected from API
 */

/**
 * @returns {jwt}
*/
export async function LoginUser({ email, password }) {
  try {
    return (await axiosClient.post("login", { email, password })).data;
  } catch (err) {
    throw err;
  }
}

/**
 * @returns {jwt}
*/
export async function SigninUser({ email, password }) {
  try {
    return (await axiosClient.post("register", { email, password })).data;
  } catch (err) {
    throw err;
  }
}
