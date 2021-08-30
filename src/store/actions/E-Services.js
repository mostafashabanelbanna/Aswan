import axios from "../../Axios/Axios_Config";

export async function getEServices(pageNumber, pageSize = 9, keywords = {}) {
  let payload = null;
  try{let response = await axios.post(
    "/ServiceAPI/Search/" + pageNumber + "/" + pageSize,
    keywords
  );
  let countResponse = await axios.post("/ServiceAPI/GetResultCount", keywords);

  let res = countResponse.data.result;
  payload = { ...response.data, count: res };
}catch(e){

  }
  return {
    type: "ESERVICES",
    payload,
  };
}