import axios from "../../../Axios/Axios_Config";

export async function getAllEventsInvestor() {
  let payload = null;
  try {
    let response = await axios.get(`/EventAPI/GetEventInvestor`);
    payload = await response.data;
  } catch (error) {
  }
  return {
    type: "EVENTS_LIST",
    payload,
  };
}