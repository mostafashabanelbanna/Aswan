import axios from "../../Axios/Axios_Config";

export async function careerApplyAPI(obj) {
  let response;
  try {
    response = await axios.post("/CareerAPI/Apply", obj, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (e) {}
  return {
    response,
  };
}

export async function youthApplyAPI(obj) {
  let response;
  try {
    response = await axios.post("/YouthEmploymentAPI/Apply", obj, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (e) {}
  return {
    response,
  };
}

export async function advertismentRequireAPI(obj) {
  let response;
  try {
    response = await axios.post("/AdvertismentRequireAPI/Add", obj, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (e) {}
  return {
    response,
  };
}

export async function eventApplyAPI(obj) {
  let response;
  try {
    response = await axios.post("/EventAPI/Apply", obj, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (e) {}
  return {
    response,
  };
}

export async function ideaApply(obj) {
  let response;
  try {
    response = await axios.post("/IdeaAPI/Apply", obj, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (e) {}
  return {
    response,
  };
}

export async function getAllBusinessFields() {
  let payload = null;
  try {
    let res = await axios.get("/LookUpAPI/GetAllbusinessfield");
    payload = res.data;
  } catch (e) {}
  return {
    type: "BUSINESS_FIELDS",
    payload,
  };
}
