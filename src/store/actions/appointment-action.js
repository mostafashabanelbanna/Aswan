import axios from "../../Axios/Axios_Config";
export async function getAppointments(pageNumber ,keyword={}, pageSize=9  ){
    let payload 
    try{
     let res =  await  axios.post('/AppointmentAPI/Search/'+ pageNumber +'/'+pageSize , keyword)
     let count = await axios.post('/AppointmentAPI/GetResultCount',keyword)
        payload ={ ...res.data, count:count.data.result}
    }catch(e){
    }
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
    }catch(e){
    }
    return {
        type:'APPOINTMENT_TYPES',
        payload
    }
}

export async function getAppointmentDetails(id) {
    let payload = null;
    try {
      let response = await axios.get("/AppointmentAPI/Details/" + id);
      payload = response.data;
    } catch (error) {
    }
    return {
      type: "APPOINTMENT_DETAILS",
      payload,
    };
  }
  
  export async function clearAppointmentDetails() {
    let payload = null;
  
    return {
      type: "CLEAR_APPOINTMENT_DETAILS",
      payload,
    };
  }