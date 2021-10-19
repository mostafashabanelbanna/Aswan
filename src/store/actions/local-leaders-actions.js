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
  } catch (e) {}
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
  } catch (e) {}
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
  } catch (e) {}

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
  } catch (e) {}

  return {
    type: "SENATE",
    payload,
  };
}

//YouthLeaders

export async function getYouthLeaders() {
  let payload = null;
  try {
    let res = await axios.get("/StaticContentAPI/GetAll/3001");
    payload = res.data;
  } catch (e) {}

  return {
    type: "Youth_Leaders",
    payload,
  };
}

//National Council

export async function getNationalCouncil(
  pageNumber,
  keywords = {},
  pageSize = 9
) {
  let payload = null;
  try {
    let response = await axios.post(
      "/NationalCouncilAPI/Search/" + pageNumber + "/" + pageSize,
      keywords
    );
    let countResponse = await axios.post(
      "/NationalCouncilAPI/GetResultCount",
      keywords
    );

    let res = countResponse.data.result;
    payload = { ...response.data, count: res, page: pageNumber };
  } catch (e) {}
  return {
    type: "NationalCouncil",
    payload,
  };
}

export async function clearNationalCouncil() {
  let payload = null;
  return {
    type: "CLEAR_NationalCouncil",
    payload,
  };
}

export async function getNationalCouncilDetails(id) {
  let payload = null;
  try {
    let response = await axios.get(`/NationalCouncilAPI/Details/${id}`);
    payload = await response.data;
  } catch (error) {}
  return {
    type: "NationalCouncil_DETAILS",
    payload,
  };
}

export function clearNationalCouncilDetails() {
  return {
    type: "NationalCouncil_DETAILS",
    payload: null,
  };
}

//Society

export async function getSociety(pageNumber, keywords = {}, pageSize = 9) {
  let payload = null;
  try {
    let response = await axios.post(
      "/SocietyAPI/Search/" + pageNumber + "/" + pageSize,
      keywords
    );
    let countResponse = await axios.post(
      "/SocietyAPI/GetResultCount",
      keywords
    );

    let res = countResponse.data.result;
    payload = { ...response.data, count: res, page: pageNumber };
  } catch (e) {}
  return {
    type: "Society",
    payload,
  };
}

export async function clearSociety() {
  let payload = null;
  return {
    type: "Society",
    payload,
  };
}

export async function getSocietyDetails(id) {
  let payload = null;
  try {
    let response = await axios.get(`/SocietyAPI/Details/${id}`);
    payload = await response.data;
  } catch (error) {}
  return {
    type: "Society_DETAILS",
    payload,
  };
}

export function clearSocietyDetails() {
  return {
    type: "Society_DETAILS",
    payload: null,
  };
}
