import Axios from "axios";
import configData from "../settings.module.json";

let url;
if (process.env.NODE_ENV === "development") {
  url = process.env.REACT_APP_BASEURL_DEV;
} else {
  url = process.env.REACT_APP_BASEURL_PROD;
}

const axios = Axios.create({
  //baseURL: "http://41.128.217.181:10097/api",
  //baseURL: "http://192.168.100.25:80/api",
  // baseURL: configData.baseURL,
  baseURL: url,
  headers: {
    "Content-type": "application/json",
  },
});

export default axios;
