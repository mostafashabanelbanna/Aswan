import Axios from 'axios';

const axios = Axios.create({
    // baseURL:"http://41.128.217.182:10086/api",
    baseURL:"http://localhost:2000/api/",
    
    headers:{
        "Content-type": "application/json"
    }
})

export default  axios;