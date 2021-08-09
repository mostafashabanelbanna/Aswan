import Axios from 'axios';

const axios = Axios.create({
    baseURL:"http://localhost:800/api",
    headers:{
        "Content-type": "application/json"
    }
})

export default  axios;