import axios from "../../Axios/Axios_Config";

export async function getAllCities(pageNumber, keywords = {}, pageSize = 9) {
  let payload = null;
  try {
    let response = await axios.post(
      "/CityAPI/Search/" + pageNumber + "/" + pageSize,
      keywords
    );
    let countResponse = await axios.post("/CityAPI/GetResultCount", keywords);

    let res = countResponse.data.result;
    payload = { ...response.data, count: res, page: pageNumber };
  } catch (e) {
  }
  return {
    type: "CITIES",
    payload,
  };
}

export async function clearNavbarCities() {
  let payload = null;
  return {
    type: "CLEAR_CITIES",
    payload,
  };
}
