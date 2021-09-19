import axios from "../../Axios/Axios_Config";

export async function getAllEvents() {
  let payload = null;
  try {
    let response = await axios.get("/EventAPI/GetByType?TypeId=2");
    payload = await response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    type: "EVENTS_LIST",
    payload,
  };
}