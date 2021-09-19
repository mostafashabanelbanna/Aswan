import axios from "../../Axios/Axios_Config";

export async function getAllPhotos() {
  let payload = null;
  try {
    let response = await axios.get("/PhotoLibraryAPI/GetAllSliderGovernment");
    payload = await response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    type: "PHOTOS_ALBUM",
    payload,
  };
}

export async function getPhotosList(pageNumber, keywords = {}, pageSize = 9) {
  let payload = null;
  try {
    let response = await axios.post(
      "/PhotoLibraryAPI/Search/" + pageNumber + "/" + pageSize,
      keywords
    );
    let countResponse = await axios.post("/PhotoLibraryAPI/GetResultCount", keywords);
    let res = countResponse.data.result;
    payload = { ...response.data,page: pageNumber, count: res };
  } catch (e) {
    console.log(e);
  }
  return {
    type: "PHOTOS_LIST",
    payload,
  };
}

export async function clearPhotosList() {
  let payload = null;
  return {
    type: "CLEAR_PHOTOS_LIST",
    payload,
  };
}

export async function getPhotoDetails(id = 0) {
  let payload = null;
  try {
    let response = await axios.get(`/PhotoLibraryAPI/Details/${id}`);
    payload = await response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    type: "PHOTO_DETAILS",
    payload,
  };
}

export function clearPhotoDetails() {
  return {
    type: "CLEAR_PHOTO_DETAILS",
    payload: null,
  };
}
