import axios from "../../Axios/Axios_Config";

export async function getHayaDetails(id){

    let payload =null
    try{
     let res =  await  axios.get('/GoodLifeInitiativeAPI/Details/'+id)
        payload =  res.data
    }catch(e){}

    return {
        type:'HAYA_CARIMA',
        payload
    }
}

export async function clearHayaDetails(){
    let payload  = null
    return {
        type:'CLEAR_HAYA_CARIMA',
        payload
    }
}