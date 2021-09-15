import axios from "../../Axios/Axios_Config";

//Tribe
export async function getTribe(pageNumber, keywords = {}, pageSize = 9) {
  let payload = null;
  try {
    let response = await axios.post(
      "/TribeAPI/Search/" + pageNumber + "/" + pageSize,
      keywords
    );
    let countResponse = await axios.post("/TribeAPI/GetResultCount", keywords);

    let res = countResponse.data.result;
    payload = { ...response.data, count: res, page: pageNumber };
  } catch (e) {
    console.log(e);
  }
  return {
    type: "TRIBE",
    payload,
  };
}

export async function clearTribe() {
  let payload = null;
  return {
    type: "CLEAR_TRIBE",
    payload,
  };
}

export async function getAllCities() {
  let payload = null;
  try {
    let res = await axios.get("CityAPI/GetAll");
    payload = res.data;
  } catch (e) {
    console.log(e);
  }
  return {
    type: "TRIBE_CITY",
    payload,
  };
}

//Parliament

export async function getParliament() {
  let payload = null;
  try {
    let res = await axios.get("/StaticContentAPI/GetAll/1001");
    payload = res.data;
  } catch (e) {
    console.log(e);
  }

  return {
    type: "PARLIAMENT",
    payload,
  };
}

//Senate

export async function getSenate() {
  let payload = null;
  try {
    let res = await axios.get("/StaticContentAPI/GetAll/1002");
    payload = res.data;
  } catch (e) {
    console.log(e);
  }

  return {
    type: "SENATE",
    payload,
  };
}
