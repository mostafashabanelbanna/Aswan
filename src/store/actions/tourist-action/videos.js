import axios from "../../../Axios/Axios_Config";
export async function video() {
  let payload = null;
  try {
    let res = await axios.get("/VideoLibraryAPI/GetAllSliderTourist");
    payload = res.data;
  } catch (e) {
    console.log(e);
  }

  return {
    type: "SLIDER_VIDEO",
    payload,
  };
}