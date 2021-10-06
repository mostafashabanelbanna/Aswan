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
export async function clearAllEventsTourist() {
  let payload = null;

  return {
    type: "CLEAR_AllEventsTourist",
    payload,
  };
}

export async function getTouristEventByMonth(month) {
  console.log(month);
  let payload = null;
  try {
    let response = await axios.get(`/EventAPI/GetTouristCalenderEventbymonth/${month}`);
    payload = await response.data;
    console.log(payload)
  } catch (error) {
  }
  return {
    type: "EVENT_OF_MONTH",
    payload,
  };
}
export function clearTouristEventByMonth() {
  let payload = null;
  return {
    type: "EVENT_OF_MONTH",
    payload,
  };
}