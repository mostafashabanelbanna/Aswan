import axios from "../../Axios/Axios_Config";

export async function sliderNews() {
  let payload = null;
  try {
    let response = await axios.get("/NewsAPI/GetSlider");
    payload = response.data;
  } catch (error) {}
  return {
    type: "SLIDER_NEWS",
    payload,
  };
}
export async function mainNews() {
  let payload = null;
  try {
    let response = await axios.get("/NewsAPI/GetMainNews");
    payload = response.data;
  } catch (error) {}
  return {
    type: "MAIN_NEWS",
    payload,
  };
}

export async function sliderVideo() {
  let payload = null;
  try {
    let response = await axios.get("/VideoLibraryAPI/GetAllSlider");
    payload = response.data;
  } catch (error) {}
  return {
    type: "SLIDER_VIDEO",
    payload,
  };
}
export async function complaints() {
  let payload = null;
  try {
    let response = await axios.get("/WebLinkAPI/GetByCategory?id=2");
    payload = response.data;
  } catch (error) {}
  return {
    type: "COMPLAINT",
    payload,
  };
}

export async function newsList(pageNumber, pageSize = 10, keywords = {}) {
  let payload = null;
  let response = await axios.post(
    "/NewsAPI/Search/" + pageNumber + "/" + pageSize,
    keywords
  );
  let countResponse = await axios.post("/NewsAPI/GetResultCount", keywords);

  let res = countResponse.data.result;
  payload = { ...response.data, count: res };
  return {
    type: "NEWS_LIST",
    payload,
  };
}

export async function clearNewsList() {
  let payload;
  return {
    type: "CLEAR_NEWS_LIST",
    payload,
  };
}

export async function feedBackApi(feedBackObj = {}) {
  let response = await axios.post("/FeedBackAPI/Contact", feedBackObj);
  return response;
}
