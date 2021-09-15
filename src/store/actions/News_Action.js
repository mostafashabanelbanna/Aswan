import axios from "../../Axios/Axios_Config";

export async function sliderNews() {
  let payload = null;
  try {
    let response = await axios.get("/NewsAPI/GetGovernmentSlider");
    payload = response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    type: "SLIDER_NEWS",
    payload,
  };
}
export async function mainNews() {
  let payload = null;
  try {
    let response = await axios.get("/NewsAPI/GetAllGovernment");
    payload = response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    type: "MAIN_NEWS",
    payload,
  };
}

export async function newsdetails(newsId) {
  let payload = null;
  try {
    let response = await axios.get("/NewsAPI/Details/" + newsId);
    payload = response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    type: "NEWS_DETAILS",
    payload,
  };
}

export async function clearNewsdetails() {
  let payload = null;

  return {
    type: "CLEAR_NEWS_DETAILS",
    payload,
  };
}

export async function sliderVideo() {
  let payload = null;
  try {
    let response = await axios.get("/VideoLibraryAPI/GetAllSliderGovernment");
    payload = response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    type: "SLIDER_VIDEO",
    payload,
  };
}
export async function complaints() {
  let payload = null;
  try {
    let response = await axios.get("/WebLinkAPI/GetByCategory?id=5");
    payload = response.data;
  } catch (error) {
    console.log(error);
  }
  return {
    type: "COMPLAINT",
    payload,
  };
}
export async function getNewsCategory() {
  let payload = null;
  try {
    let res = await axios.get("/LookUpAPI/GetAllNewsCategory");
    payload = res.data;
  } catch (e) {
    console.log(e);
  }
  return {
    type: "NEWS_CATEGORY",
    payload,
  };
}

export async function getNewsSectors() {
  let payload = null;
  try {
    let res = await axios.get("/LookUpAPI/GetAllSector");
    payload = res.data;
  } catch (e) {
    console.log(e);
  }
  return {
    type: "NEWS_SECTORS",
    payload,
  };
}

export async function newsList(pageNumber, keywords = {}, pageSize = 9) {
  let payload = null;
  try {
    let response = await axios.post(
      "/NewsAPI/Search/" + pageNumber + "/" + pageSize,
      keywords
    );
    let countResponse = await axios.post("/NewsAPI/GetResultCount", keywords);
    let res = countResponse.data.result;
    payload = { ...response.data, count: res };
  } catch (e) {
    console.log(e);
  }
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
