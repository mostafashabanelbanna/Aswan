import axios from "../../Axios/Axios_Config";

export async function getAllEventsHome() {
  let payload = null;
  try {
    let response = await axios.get(`/EventAPI/GetEventGovernment`);
    payload = await response.data;
  } catch (error) {
  }
  return {
    type: "EVENTS_LIST",
    payload,
  };
}

export async function clearAllEventsHome() {
  let payload = null;

  return {
    type: "CLEAR_AllEventsHome",
    payload,
  };
}