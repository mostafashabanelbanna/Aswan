import axios from "../../Axios/Axios_Config";

export async function getEServices(pageNumber, keywords = {}, pageSize = 9) {
  let payload = null;
  try {
    let response = await axios.post(
      "/DirectoryAPI/Search/" + pageNumber + "/" + pageSize,
      keywords
    );
    let countResponse = await axios.post(
      "/DirectoryAPI/GetResultCount",
      keywords
    );

    let res = countResponse.data.result;
    payload = { ...response.data, count: res, page: pageNumber };
  } catch (e) {}
  return {
    type: "ESERVICES",
    payload,
  };
}

export async function clearEServices() {
  let payload = null;
  return {
    type: "CLEAR_ESERVICES",
    payload,
  };
}

export async function getAllCities() {
  let payload = null;
  try {
    let res = await axios.get("/CityAPI/GetAll");
    payload = res.data;
  } catch (e) {}
  return {
    type: "CITY_CATEGORY",
    payload,
  };
}

export async function getAllDirectoryCategory(id) {
  let payload = null;
  let res;
  try {
    if (id != null)
      res = await axios.get(
        `/LookUpAPI/GetAllDirectoryCategory?ParentId=${id}`
      );
    else res = await axios.get(`/LookUpAPI/GetAllDirectoryCategory`);
    payload = res.data;
  } catch (e) {}
  return {
    type: "DIRECTORY_CATEGORY",
    payload,
  };
}

export async function clearDirectoryCategory() {
  let payload = null;
  return {
    type: "CLEAR_DIRECTORY_CATEGORY",
    payload,
  };
}

export async function getAllDirectoryType() {
  let payload = null;
  try {
    let res = await axios.get("/LookUpAPI/GetAllDirectoryType");
    payload = res.data;
  } catch (e) {}
  return {
    type: "DIRECTORY_TYPE",
    payload,
  };
}

//E-Service-Directory

export async function getEServiceDirectories(
  pageNumber,
  keywords = {},
  pageSize = 9
) {
  let payload = null;
  try {
    let response = await axios.post(
      "/ServiceAPI/Search/" + pageNumber + "/" + pageSize,
      keywords
    );
    let countResponse = await axios.post(
      "/ServiceAPI/GetResultCount",
      keywords
    );

    let res = countResponse.data.result;
    payload = { ...response.data, count: res, page: pageNumber };
  } catch (e) {}
  return {
    type: "ESERVICE_DIRECTORIES",
    payload,
  };
}

export async function clearEServiceDirectories() {
  let payload = null;
  return {
    type: "CLEAR_ESERVICES_DIRECTORIES",
    payload,
  };
}

export async function getAllServiceDirectoryTypes() {
  let payload = null;
  try {
    let res = await axios.get("/LookUpAPI/GetAllServiceCategory");
    payload = res.data;
  } catch (e) {}
  return {
    type: "ESERVICE_DIRECTORY_TYPES",
    payload,
  };
}

//Directorate-services

export async function getDirectorates(pageNumber, keywords = {}, pageSize = 9) {
  let payload = null;
  try {
    let response = await axios.post(
      "/DirectorateAPI/Search/" + pageNumber + "/" + pageSize,
      keywords
    );
    let countResponse = await axios.post(
      "/DirectorateAPI/GetResultCount",
      keywords
    );

    let res = countResponse.data.result;
    payload = { ...response.data, count: res, page: pageNumber };
  } catch (e) {}
  return {
    type: "DIRECTORATES",
    payload,
  };
}

export async function clearDirectorates() {
  let payload = null;
  return {
    type: "CLEAR_DIRECTORATES",
    payload,
  };
}

export async function getDirectorateDetails(Id) {
  let payload = null;
  try {
    let response = await axios.get(`/DirectorateAPI/Details/${Id}`);
    payload = await response.data;
  } catch (error) {}
  return {
    type: "DIRECTORATE_DETAILS",
    payload,
  };
}

export async function clearDirectorateDetails() {
  let payload = null;
  return {
    type: "DIRECTORATE_DETAILS",
    payload,
  };
}

//Advertisement

export async function getAdvertisements(
  pageNumber,
  keywords = {},
  pageSize = 9
) {
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
    type: "ADVERTISEMENTS",
    payload,
  };
}

export async function clearAdvertisements() {
  let payload = null;
  return {
    type: "CLEAR_ADVERTISEMENTS",
    payload,
  };
}

export async function getAllAdvertisementTypes() {
  let payload = null;
  try {
    let res = await axios.get("/LookUpAPI/GetAllAdvertismentType");
    payload = res.data;
  } catch (e) {}
  return {
    type: "ADVERTISEMENT_TYPES",
    payload,
  };
}
