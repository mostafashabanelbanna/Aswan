import axios from "../../Axios/Axios_Config";

export async function getStaticContent(categoryId) {
  let payload = null;
  try {
    let response = await axios.get(`/StaticContentAPI/GetAll/${categoryId}`);
    payload = await response.data;
  } catch (error) {}
  return {
    type: "STATIC_CONTENT",
    payload,
  };
}

export async function clearStaticContent() {
  let payload = null;
  return {
    type: "CLEAR_STATIC_CONTENT",
    payload,
  };
}

export async function getStaticContentDetails(id) {
  let payload = null;
  try {
    let response = await axios.get(`/StaticContentAPI/Details/${id}`);
    payload = await response.data;
  } catch (error) {}
  return {
    type: "STATIC_CONTENT_DETAILS",
    payload,
  };
}

export function clearStaticContentDetails() {
  return {
    type: "CLEAR_STATIC_CONTENT_DETAILS",
    payload: null,
  };
}
