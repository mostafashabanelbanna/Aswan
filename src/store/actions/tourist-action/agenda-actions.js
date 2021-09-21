import axios from "../../../Axios/Axios_Config";

export async function getAllEventsTourist() {
  let payload = null;
  try {
    let response = await axios.get(`/EventAPI/GetEventTourist`);
    payload = await response.data;
  } catch (error) {
  }
  return {
    type: "EVENTS_LIST",
    payload,
  };
}