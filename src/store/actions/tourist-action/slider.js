import axios from "../../../Axios/Axios_Config";

export async function touristNewsSlider() {
    let payload = null;
    try {
      let response = await axios.get("/NewsAPI/GetTouristSlider");
      payload = response.data;
    } catch (error) {
      console.log(error);
    }
    return {
      type: "SLIDER_NEWS",
      payload,
    };
  }