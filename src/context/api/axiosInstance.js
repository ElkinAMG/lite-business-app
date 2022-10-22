import axios from "axios";

const Axios = axios.create({
  headers: { Authorization: localStorage.getItem("user-token") },
  baseURL: process.env.REACT_APP_API_GATEWAY,
});

export default Axios;
