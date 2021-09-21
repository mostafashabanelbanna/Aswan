import axios from "../../../Axios/Axios_Config";
export async function video() {
  let payload = null;
  try {
    let res = await axios.get("/VideoLibraryAPI/GetAllSliderTourist");
    payload = res.data;
  } catch (e) {
  }

  return {
    type: "SLIDER_VIDEO",
    payload,
  };
}

export async function getMainVideoTourist() {
    let payload = null;
    try {
      let response = await axios.get("/VideoLibraryAPI/GetMainVideoGovernment");
      payload = response.data;
    } catch (error) {
    }
    return {
      type: "MAIN_VIDEO",
      payload,
    };
  }