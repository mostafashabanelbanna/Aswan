import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://localhost:44312/api", //41.128.217.182:10086/api",
  //   baseURL: "41.128.217.182:10086/api", //41.128.217.182:10086/api",
  headers: {
    "Content-type": "application/json",
  },
});

export default axios;
