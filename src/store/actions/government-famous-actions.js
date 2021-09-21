import axios from "../../Axios/Axios_Config";

export async function getAllFamousPeople() {
  let payload = null;
  try {
    let response = await axios.get("/StaticContentAPI/GetAll/1");
    payload = await response.data;
  } catch (e) {
  }
  return {
    type: "FAMOUS_PEOPLE_LIST",
    payload,
  };
}
