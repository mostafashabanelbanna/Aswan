import axios from "../../../Axios/Axios_Config";

export async function touristSlider() {
    let payload = null;
    try {
      let response = await axios.get("/TouristAttraction/GetTouristAttractionTourist");
      payload = response.data;
    } catch (error) {
    }
    return {
      type: "SLIDER",
      payload,
    };
  }

  export async function clearTouristSlider() {
    let payload = null;
    return {
      type: "CLEAR_SLIDER",
      payload,
    };
  }