import axios  from "../../Axios/Axios_Config";

export async function getAllPhotos(){
    let payload = null;
    try{
        let response = await axios.get("/PhotoLibraryAPI/GetAllSlider")
        payload = await response.data;
    } catch (error){
    }
    return {
        type:"PHOTOS_ALBUM_LIST",
        payload
    };
}