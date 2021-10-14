import axios from "../../Axios/Axios_Config";

export async function getAllEventsHome() {
  let payload = null;
  try {
    let response = await axios.get(`/EventAPI/GetEventGovernment`);
    payload = await response.data;
  } catch (error) {}
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

export async function getEventByMonth(month) {
  let payload = null;
  try {
    let response = await axios.get(
      `/EventAPI/GetGovernmentCalenderEventbymonth/${month}`
    );
    payload = await response.data;
  } catch (error) {}
  return {
    type: "EVENT_OF_MONTH",
    payload,
  };
}
export function clearEventByMonth() {
  let payload = null;
  return {
    type: "EVENT_OF_MONTH",
    payload,
  };
}
