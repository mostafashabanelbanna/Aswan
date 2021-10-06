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

export async function clearAllEventsInvestor() {
  let payload = null;

  return {
    type: "CLEAR_AllEventsInvestor",
    payload,
  };
}

export async function getInvestorEventByMonth(month) {
  console.log(month);
  let payload = null;
  try {
    let response = await axios.get(`/EventAPI/GetInvestorCalenderEventbymonth/${month}`);
    payload = await response.data;
    console.log(payload)
  } catch (error) {
  }
  return {
    type: "EVENT_OF_MONTH",
    payload,
  };
}
export function clearInvestorEventByMonth() {
  let payload = null;
  return {
    type: "EVENT_OF_MONTH",
    payload,
  };
}