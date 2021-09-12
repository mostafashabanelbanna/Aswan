import axios from "../../Axios/Axios_Config";
export async function getEx_Conservatives(){
    let payload =null
    try{
     let res =  await  axios.get('/GovernorAPI/GetAll')
        payload =  res.data
    }catch(e){}

    return {
        type:'EX_CONSERVATIVES',
        payload
    }
}

export async function leaders(){
    let payload =null
    try{
     let currleader =  await  axios.get('/GovernorAPI/CurrentGovernor')
     let leaders =  await axios.get('/LeaderAPI/GetAll');
        let res = currleader.data.result;
        payload = {...leaders.data , res}
        console.log(payload)
    }catch(e){}

    return {
        type:'LEADERS',
        payload
    }
}
