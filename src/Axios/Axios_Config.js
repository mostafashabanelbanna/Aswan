import Axios from 'axios';

const axios = Axios.create({
    baseURL:"http://localhost:800/api",//41.128.217.182:10086/api",
    headers:{
        "Content-type": "application/json"
    }
})

export default  axios;