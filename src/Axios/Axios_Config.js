import Axios from 'axios';

const axios = Axios.create({
    baseURL:"http://localhost:2000/api",
    headers:{
        "Content-type": "application/json"
    }
})

export default  axios;