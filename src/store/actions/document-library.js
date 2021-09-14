import axios from "../../Axios/Axios_Config";

export async function DocumentLibraryList(
  pageNumber,
  keywords = {},
  pageSize = 2
) {
  let payload = null;
  console.log(keywords);
  try {
    let response = await axios.post(
      "/DocumentLibraryAPI/Search/" + pageNumber + "/" + pageSize,
      keywords
    );
    let countResponse = await axios.post(
      "/DocumentLibraryAPI/GetResultCount",
      keywords
    );
    console.log(keywords);
    let res = countResponse.data.result;
    payload = { ...response.data, count: res };
  } catch (e) {}
  return {
    type: "Document_Library_LIST",
    payload,
  };
}

export async function getAllDocumentType() {
  let payload = null;
  try {
    let res = await axios.get("/LookUpAPI/GetAllDocumentType");
    payload = res.data;
    console.log("Hi", payload);
  } catch (e) {}
  return {
    type: "DOCUMENT_TYPE",
    payload,
  };
}
