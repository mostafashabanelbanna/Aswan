import axios  from "../../Axios/Axios_Config";

export async function getAllPortals(){
    let payload = null;
    try{
        let response = await axios.get("/WebLinkAPI/GetAll")
        payload = await response.data;
    } catch (error){
        console.log(error);
    }
    return {
        type:"PORTALS_LIST",
        payload
    };
}