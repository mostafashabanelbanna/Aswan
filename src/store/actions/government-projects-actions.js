import axios from "../../Axios/Axios_Config";

export async function getAllProjects() {
  let payload = null;
  try {
    let response = await axios.get("/NationalProjectAPI/GETALLSlider");
    payload = await response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    type: "PROJECTS_SLIDER",
    payload,
  };
}

export async function getProjectDetails(id = 0) {
  let payload = null;
  try {
    let response = await axios.get(`/NationalProjectAPI/Details/${id}`);
    payload = await response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    type: "PROJECT_DETAILS",
    payload,
  };
}

export function clearData() {
  return {
    type: "CLEAR_DATA",
    payload: null,
  };
}

//Projects Listing
export async function getProjectsList(
  pageNumber,
  keywords = {},
  pageSize = 9
) {
  let payload = null;
  try {
    let response = await axios.post(
      "/NationalProjectAPI/Search/" + pageNumber + "/" + pageSize,
      keywords
    );
    let countResponse = await axios.post(
      "/NationalProjectAPI/GetResultCount",
      keywords
    );

    let res = countResponse.data.result;
    payload = { ...response.data, count: res, page: pageNumber };
  } catch (e) {
    console.log(e);
  }
  return {
    type: "PROJECTS_LIST",
    payload,
  };
}

export async function clearProjectsList() {
  let payload = null;
  return {
    type: "CLEAR_PROJECTS_LIST",
    payload,
  };
}

export async function getAllProjectsCategories() {
  let payload = null;
  try {
    let res = await axios.get("/LookUpAPI/GetAllNationalProjectSector");
    payload = res.data;
  } catch (e) {
    console.log(e);
  }
  return {
    type: "NATIONAL_PROJECTS_SECTORS",
    payload,
  };
}