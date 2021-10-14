import Axios from "axios";

const axios = Axios.create({
  //baseURL: "http://41.128.217.181:10097/api",
  baseURL: "http://192.168.100.25:80/api",
  headers: {
    "Content-type": "application/json",
  },
});

export default axios;
