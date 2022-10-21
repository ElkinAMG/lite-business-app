import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_GATEWAY,
  headers: {
    Authorization: localStorage.getItem("user-token"),
  },
});

export default axiosClient;
