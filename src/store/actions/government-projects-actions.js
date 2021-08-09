
import axios  from "../../Axios/Axios_Config";

export async function getAllProjects(){
    let payload = null;
    try{
        let response = await axios.get("/NationalProjectAPI/GETALLSlider")
        payload = await response.data;
    } catch (error){
    }
    return {
        type:"PROJECTS_LIST",
        payload
    };
}

export async function getProjectDetails(id){
    let payload = null
    try{
        let response = await axios.get(`/NationalProjectAPI/Details/${id}`);
        payload = await response.data;
    } catch (error) {
    }
    return {
        type:"PROJECT_DETAILS",
        payload
    }
}

export function clearData(){
    return{
        type:"CLEAR_DATA",
        payload: null
    }
}