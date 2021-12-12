import axios from "../../Axios/Axios_Config";

export async function getAdvertisment(pageNumber, keywords = {}, pageSize = 9) {
  console.log(keywords);
  let payload = null;
  try {
    let response = await axios.post(
      "/AdvertismentAPI/Search/" + pageNumber + "/" + pageSize,
      keywords
    );
    let countResponse = await axios.post(
      "/AdvertismentAPI/GetResultCount",
      keywords
    );
    let res = countResponse.data.result;
    payload = { ...response.data, count: res, page: pageNumber };
  } catch (e) {}
  return {
    type: "ADVERTISMENT_LIST",
    payload,
  };
}

export async function clearAdvertisement() {
  let payload = null;
  return {
    type: "CLEAR_ADVERTISMENT_LIST",
    payload,
  };
}

export async function getAllAdvertismentType() {
  let payload = null;
  try {
    let res = await axios.get("/LookUpAPI/GetAllAdvertismentType");
    payload = res.data;
  } catch (e) {}
  return {
    type: "ADVERTISMENT_TYPE",
    payload,
  };
}

export async function getAllAdvertisment(pageNumber, pageSize = 9) {
  let payload = null;
  try {
    let res = await axios.get(
      `/AdvertismentAPI/GetAdsBids/${pageNumber}/${pageSize}`
    );
    let countRes = await axios.get(`/AdvertismentAPI/GetAdsBidsCount`);
    let count = countRes.data.result;
    payload = { ...res.data, count };
  } catch (e) {}
  return {
    type: "ADVERTISMENT_ALL",
    payload,
  };
}

export async function youthEmployment(pageNumber, keywords = {}, pageSize = 9) {
  let payload = null;
  try {
    let response = await axios.post(
      "/YouthEmploymentAPI/Search/" + pageNumber + "/" + pageSize,
      keywords
    );
    let countResponse = await axios.post(
      "/YouthEmploymentAPI/GetResultCount",
      keywords
    );
    let res = countResponse.data.result;
    payload = { ...response.data, count: res };
  } catch (e) {}
  return {
    type: "YOUTH_EMPLOYENT",
    payload,
  };
}

export async function getCareer(pageNumber, keywords = {}, pageSize = 9) {
  let payload = null;
  try {
    let response = await axios.post(
      "/CareerAPI/Search/" + pageNumber + "/" + pageSize,
      keywords
    );
    let countResponse = await axios.post("/CareerAPI/GetResultCount", keywords);
    let res = countResponse.data.result;
    payload = { ...response.data, count: res };
  } catch (e) {}
  return {
    type: "CAREER",
    payload,
  };
}

export async function getCareerDetails(Id) {
  let payload = null;
  try {
    let response = await axios.get("/CareerAPI/Details/" + Id);
    payload = response.data;
  } catch (error) {}
  return {
    type: "CAREER_DETAILS",
    payload,
  };
}

export async function clearCareerDetails() {
  let payload = null;

  return {
    type: "CAREER_DETAILS",
    payload,
  };
}

export async function getYouthDetails(Id) {
  let payload = null;
  try {
    let response = await axios.get("/YouthEmploymentAPI/Details/" + Id);
    payload = response.data;
  } catch (error) {}
  return {
    type: "YOUTH_DETAILS",
    payload,
  };
}

export async function clearYouthDetails() {
  let payload = null;

  return {
    type: "YOUTH_DETAILS",
    payload,
  };
}

//ads
export async function getAllPaidAds() {
  let payload = null;
  try {
    let res = await axios.get("/AdvertismentAPI/GetPaidads");
    payload = res.data;
  } catch (e) {}
  return {
    type: "ADS",
    payload,
  };
}

// Details
export async function advertismentDetails(advertismentId) {
  let payload = null;
  try {
    let response = await axios.get(
      "/AdvertismentAPI/Details/" + advertismentId
    );
    payload = response.data;
  } catch (error) {}
  return {
    type: "ADVERTISMENT_DETAILS",
    payload,
  };
}

export async function clearAdvertismentDetails() {
  let payload = null;

  return {
    type: "CLEAR_ADVERTISMENT_DETAILS",
    payload,
  };
}

//on load Modal ad
export async function getFocusedAd() {
  let payload = null;
  try {
    let res = await axios.get("/AdvertismentAPI/GetFocus");
    payload = res.data;
  } catch (e) {}
  return {
    type: "FOCUSED_AD",
    payload,
  };
}

//get career counter
export async function getCareerCounter(Id) {
  let payload = null;
  try {
    let response = await axios.get("/CareerAPI/GetApplicantCount/" + Id);
    payload = response.data;
  } catch (error) {}
  return {
    type: "CAREER_COUNTER",
    payload,
  };
}
