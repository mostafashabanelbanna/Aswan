import axios from "../../Axios/Axios_Config";

export async function getAdvertisment(
  pageNumber,
  keywords = {},
  pageSize = 2
) {
  let payload = null;
  console.log(keywords);
  try {
    let response = await axios.post(
      "/AdvertismentAPI/Search/" + pageNumber + "/" + pageSize,
      keywords
    );
    let countResponse = await axios.post(
      "/AdvertismentAPI/GetResultCount",
      keywords
    );
    console.log(keywords);
    let res = countResponse.data.result;
    payload = { ...response.data, count: res };
  } catch (e) {}
  return {
    type: "ADVERTISMENT_LIST",
    payload,
  };
}

export async function youthEmployment(
    pageNumber,
    keywords = {},
    pageSize = 2
  ) {
    let payload = null;
    console.log(keywords);
    try {
      let response = await axios.post(
        "/YouthEmploymentAPI/Search/" + pageNumber + "/" + pageSize,
        keywords
      );
      let countResponse = await axios.post(
        "/YouthEmploymentAPI/GetResultCount",
        keywords
      );
      console.log(keywords);
      let res = countResponse.data.result;
      payload = { ...response.data, count: res };
    } catch (e) {}
    return {
      type: "YOUTH_EMPLOYENT",
      payload,
    };
  }

  export async function getCareer(
    pageNumber,
    keywords = {},
    pageSize = 2
  ) {
    let payload = null;
    console.log(keywords);
    try {
      let response = await axios.post(
        "/CareerAPI/Search/" + pageNumber + "/" + pageSize,
        keywords
      );
      let countResponse = await axios.post(
        "/CareerAPI/GetResultCount",
        keywords
      );
      console.log(keywords);
      let res = countResponse.data.result;
      payload = { ...response.data, count: res };
    } catch (e) {}
    return {
      type: "CAREER",
      payload,
    };
  }

export async function getAllAdvertismentType() {
  let payload = null;
  try {
    let res = await axios.get("/LookUpAPI/GetAllAdvertismentType");
    payload = res.data;
    console.log("Hi", payload);
  } catch (e) {}
  return {
    type: "ADVERTISMENT_TYPE",
    payload,
  };
}

export async function getAllAdvertisment() {
    let payload = null;
    try {
      let res = await axios.get("/AdvertismentAPI/GetAdsBids");
      payload = res.data;
      console.log("Hi", payload);
    } catch (e) {}
    return {
      type: "ADVERTISMENT_ALL",
      payload,
    };
  }

  