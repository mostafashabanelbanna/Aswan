import Axios from "axios";
import configData from "../settings.module.json";
const axios = Axios.create({
  //baseURL: "http://41.128.217.181:10097/api",
  //baseURL: "http://192.168.100.25:80/api",
  // baseURL: configData.baseURL,
  baseURL: process.env.REACT_APP_BASEURL,
  headers: {
    "Content-type": "application/json",
  },
});

export default axios;
