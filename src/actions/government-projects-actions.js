import axios from 'axios';

const baseURL = "http://localhost:800/api/NationalProjectAPI/GETALLSlider"

export async function getAllProjects(){
    let payload = null;
    try{
        let response = await fetch(baseURL)
        payload = await response.json();
    } catch (error){
        console.log(error);
    }
    return {
        type:"PROJECTS_LIST",
        payload
    };
}