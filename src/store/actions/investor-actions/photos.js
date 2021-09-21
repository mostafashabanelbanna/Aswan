import axios from "../../../Axios/Axios_Config";
export async function investorPhotoAlbum() {
  let payload = null;
  try {
    let res = await axios.get("/PhotoLibraryAPI/GetAllSliderInvestor");
    payload = res.data;
  } catch (e) {
  }

  return {
    type: "PHOTO_ALBUM",
    payload,
  };
}