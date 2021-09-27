import axios from "../../Axios/Axios_Config";

export async function getEventsList(pageNumber, keywords = {}, pageSize = 9) {
    let payload = null;
    try {

      let response = await axios.post(
        "/EventAPI/Search/" + pageNumber + "/" + pageSize,
        keywords
      );
      let countResponse = await axios.post("/EventAPI/GetResultCount", keywords);
      let res = countResponse.data.result;
      payload = { ...response.data, count: res, page: pageNumber };
    } catch (e) {
    }
    return {
      type: "EVENTS_LIST",
      payload,
    };
  }
  
  export async function clearEventsList() {
    let payload = null;
    return {
      type: "CLEAR_EVENTS_LIST",
      payload,
    };
  }

  export async function getEventsTypes() {
    let payload = null;
    try {
      let res = await axios.get("/LookUpAPI/GetAllEventType");
      payload = res.data;
    } catch (e) {
    }
    return {
      type: "EVENTS_TYPES",
      payload,
    };
  }
  
  export async function getEventsSectors() {
    let payload = null;
    try {
      let res = await axios.get("/LookUpAPI/GetAllSector");
      payload = res.data;
    } catch (e) {
    }
    return {
      type: "EVENTS_SECTORS",
      payload,
    };
  }

  export async function getEventDetails(id) {
    let payload = null;
    try {
      let response = await axios.get(`/EventAPI/Details/${id}`);
      payload = await response.data;
    } catch (error) {
    }
    return {
      type: "EVENT_DETAILS",
      payload,
    };
  }
  
  export function clearEventDetails() {
    let payload = null;
    return {
      type: "CLEAR_EVENT_DETAILS",
      payload,
    };
  }
  