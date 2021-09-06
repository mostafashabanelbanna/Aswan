import axios from "../../Axios/Axios_Config";

export async function getEServices(pageNumber, keywords = {},pageSize = 9) {
  let payload = null;
  try{let response = await axios.post(
    "/ServiceAPI/Search/" + pageNumber + "/" + pageSize,
    keywords
  );
  let countResponse = await axios.post("/ServiceAPI/GetResultCount", keywords);

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