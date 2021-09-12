import axios from "../../Axios/Axios_Config";
export async function getAppointments(pageNumber ,keyword={}, pageSize=9  ){
    let payload =null
    try{
     let res =  await  axios.post('/AppointmentAPI/Search/'+ pageNumber +'/'+pageSize , keyword)
     let count = await axios.post('/AppointmentAPI/GetResultCount'.keyword)
        payload ={ ...res.data, count:count.data.result}
    }catch(e){}

    return {
        type:'APPOINTMENT',
        payload
    }
}