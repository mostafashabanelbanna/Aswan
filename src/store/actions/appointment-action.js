import axios from "../../Axios/Axios_Config";
export async function getAppointments(pageNumber ,keyword={}, pageSize=9  ){
    let payload 
    try{
     let res =  await  axios.post('/AppointmentAPI/Search/'+ pageNumber +'/'+pageSize , keyword)
     let count = await axios.post('/AppointmentAPI/GetResultCount',keyword)
        payload ={ ...res.data, count:count.data.result}
    }catch(e){}
console.log(payload)
    return {
        type:'APPOINTMENT',
        payload
    }
}
export async function getAppointmentsTypes(pageNumber ,keyword={}, pageSize=9  ){
    let payload 
    try{
     let res =  await axios.get('/LookUpAPI/GetAllAppointmentType')
        payload =res.data
    }catch(e){}
console.log(payload)
    return {
        type:'APPOINTMENT_TYPES',
        payload
    }
}
