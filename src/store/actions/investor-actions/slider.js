import axios from "../../../Axios/Axios_Config";

export async function investorNewsSlider() {
    let payload = null;
    try {
      let response = await axios.get("/NewsAPI/GetInvestorSlider");
      payload = response.data;
    } catch (error) {
      console.log(error);
    }
    return {
      type: "SLIDER_NEWS",
      payload,
    };
  }