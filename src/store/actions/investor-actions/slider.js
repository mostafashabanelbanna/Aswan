import axios from "../../../Axios/Axios_Config";

export async function investorNewsSlider() {
    let payload = null;
    try {
      let response = await axios.get("/NewsAPI/GetInvestorSlider");
      payload = response.data;
    } catch (error) {
    }
    return {
      type: "SLIDER_NEWS",
      payload,
    };
}

export async function clearInvestorNewsSlider() {
  let payload = null;
  return {
    type: "CLEAR_SLIDER_NEWS",
    payload,
  };
}

export async function investorMapSlider() {
  let payload = null;
  try {
    let response = await axios.get('/DocumentLibraryAPI/GetAll?categoryID=1003');
    payload = response.data;
  } catch (error) {
  }
  return {
    type: "MAP_SLIDER",
    payload,
  };
}

export async function clearInvestorMapSlider() {
let payload = null;
return {
  type: "CLEAR_MAP_SLIDER",
  payload,
};
}