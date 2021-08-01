import axios  from "../Axios/Axios_Config";

export async function sliderNews(){

    let payload = null;
    try{
        let response = await axios.get('/NewsAPI/GetSlider');
        payload =  response.data;
    } catch (error){
        console.log(error);
    }
    return {
        type:"SLIDER_NEWS",
        payload
    };
}
export async function mainNews(){
    

    let payload = null;
    try{
        let response = await axios.get('/NewsAPI/GetMainNews');
        payload =  response.data;
        
    } catch (error){
        console.log(error);
    }
    return {
        type:"MAIN_NEWS",
        payload
    };
}

export async function sliderVideo(){

    let payload = null;
    try{
        let response = await axios.get('/VideoLibraryAPI/GetAllSlider');
        payload =  response.data;
    } catch (error){
        console.log(error);
    }
    return {
        type:"SLIDER_VIDEO",
        payload
    };
}