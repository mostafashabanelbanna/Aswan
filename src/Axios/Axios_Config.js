import Axios from "axios";

const axios = Axios.create({
  //baseURL: "https://localhost:44312/api", //41.128.217.182:10086/api",
     baseURL: "http://41.128.217.181:10097/api", //41.128.217.182:10086/api",
  headers: {
    "Content-type": "application/json",
  },
});

export default axios;
