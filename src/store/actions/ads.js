import axios from "../../Axios/Axios_Config";

export async function getAllAds() {
    let payload = null;
    try {
      let res = await axios.get("/AdvertismentAPI/GetPaidads");
      payload = res.data;
    } catch (e) {}
    return {
      type: "ADS",
      payload,
    };
  }
  