import axios from "../../Axios/Axios_Config";

export async function careerApplyAPI(obj) {
    let response;
    try{
        response = await axios.post("/CareerAPI/Apply", obj,{
            headers: { "Content-Type": "multipart/form-data"}
          });
    } catch (e){
    }
    return {
        response
      };
}

export async function youthApplyAPI(obj) {
    let response;
    try{
        response = await axios.post("/YouthEmploymentAPI/Apply", obj,{
            headers: { "Content-Type": "multipart/form-data"}
          });
    } catch (e){
    }
    return {
        response
      };
}

export async function advertismentRequireAPI(obj) {
    let response;
    try{
        response = await axios.post("/AdvertismentRequireAPI/Add", obj,{
            headers: { "Content-Type": "multipart/form-data"}
          });
    } catch (e){
    }
    return {
        response
      };
}