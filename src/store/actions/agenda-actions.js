import axios from "../../Axios/Axios_Config";

export async function getAllEvents(id) {
  let payload = null;
  try {
    let response = await axios.get(`/EventAPI/GetByType?TypeId=${id}`);
    payload = await response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    type: "EVENTS_LIST",
    payload,
  };
}