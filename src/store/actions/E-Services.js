import axios from "../../Axios/Axios_Config";

export async function getEServices(pageNumber, keywords = {},pageSize = 9) {
  let payload = null;
  try{let response = await axios.post(
    "/DirectoryAPI/Search/" + pageNumber + "/" + pageSize,
    keywords
  );
  let countResponse = await axios.post("/DirectoryAPI/GetResultCount", keywords);

  let res = countResponse.data.result;
  payload = { ...response.data, count: res,page:pageNumber };
}catch(e){

  }
  return {
    type: "ESERVICES",
    payload,
  };
}
export async function clearEServices() {
  let payload ;
  return {
    type: "CLEAR_ESERVICES",
    payload,
  };
}

export async function getAllCities(){
  let payload = null
  try{
    let res = await axios.get('/LookUpAPI/GetAllCityCategory');
    payload = res.data
  }catch(e){}
  return {
    type:"CITY_CATEGORY",
    payload
  }
}

export async function getAllDirectoryCategory(){
  let payload = null
  try{
    let res = await axios.get('/LookUpAPI/GetAllDirectoryCategory');
    payload = res.data
  }catch(e){}
  return {
    type:"DIRECTORY_CATEGORY",
    payload
  }
}

export async function getAllDirectoryType(){
  let payload = null
  try{
    let res = await axios.get('/LookUpAPI/GetAllDirectoryType');
    payload = res.data
  }catch(e){}
  return {
    type:"DIRECTORY_TYPE",
    payload
  }
}