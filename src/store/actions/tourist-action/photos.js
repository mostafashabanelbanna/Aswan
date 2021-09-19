import axios from "../../../Axios/Axios_Config";
export async function photoAlbum() {
  let payload = null;
  try {
    let res = await axios.get("/PhotoLibraryAPI/GetAllSliderTourist");
    payload = res.data;
  } catch (e) {
    console.log(e);
  }

  return {
    type: "PHOTO_ALBUM",
    payload,
  };
}