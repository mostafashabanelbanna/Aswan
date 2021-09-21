import axios from "../../Axios/Axios_Config";

export async function DocumentLibraryList(
  pageNumber,
  keywords = {},
  pageSize = 2
) {
  let payload = null;
  try {
    let response = await axios.post(
      "/DocumentLibraryAPI/Search/" + pageNumber + "/" + pageSize,
      keywords
    );
    let countResponse = await axios.post(
      "/DocumentLibraryAPI/GetResultCount",
      keywords
    );
    let res = countResponse.data.result;
    payload = { ...response.data, count: res };
  } catch (e) {
  }
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
  } catch (e) {}
  return {
    type: "DOCUMENT_TYPE",
    payload,
  };
}

// Details
export async function documentLibraryDetails(documentLibraryId) {
  let payload = null;
  try {
    let response = await axios.get(
      "/DocumentLibraryAPI/Details/" + documentLibraryId
    );
    payload = response.data;
  } catch (error) {}
  return {
    type: "DOCUMENT_LIBRARY_DETAILS",
    payload,
  };
}

export async function clearDocumentLibrarydetails() {
  let payload;

  return {
    type: "CLEAR_DOCUMENT_LIBRARY_DETAILS",
    payload,
  };
}
