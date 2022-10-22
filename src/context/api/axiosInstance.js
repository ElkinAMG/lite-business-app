import axios from "axios";

export default function Axios() {
  return axios.create({
    headers: { Authorization: localStorage.getItem("user-token") },
    baseURL: process.env.REACT_APP_API_GATEWAY,
  });
}
