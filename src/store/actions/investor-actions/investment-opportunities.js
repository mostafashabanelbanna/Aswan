import axios from "../../../Axios/Axios_Config";

export async function getFocusedInvestorOpportunities() {
  let payload = null;
  try {
    let response = await axios.get(`/InvestmentAPI/GetFocusOpportiunity`);
    payload = await response.data;
  } catch (error) {
  }
  return {
    type: "FOCUSED_OPPORTUNITIES",
    payload,
  };
}

export async function getAllInvestorOpportunities(pageNumber, keywords = {}, pageSize = 9) {
    let payload = null;
    try {
      let response = await axios.post(
        "/InvestmentAPI/Search/" + pageNumber + "/" + pageSize,
        keywords
      );
      let countResponse = await axios.post(
        "/InvestmentAPI/GetResultCount",
        keywords
      );
      let res = countResponse.data.result;
      payload = { ...response.data, count: res, page: pageNumber };
    } catch (e) {}
    return {
      type: "INVESTOR_OPPORTUNITIES_LIST",
      payload,
    };
  }

  export async function clearAllInvestorOpportunities() {
    let payload = null;
    return {
      type: "CLEAR_INVESTOR_OPPORTUNITIES_LIST",
      payload,
    };
  }

  export async function getAllInvestmentPaymentSystem() {
    let payload = null;
    try {
      let res = await axios.get("/LookUpAPI/GetAllInvestmentPaymentSystem");
      payload = res.data;
    } catch (e) {
    }
    return {
      type: "Investment_Payment_System",
      payload,
    };
  }

  export async function getAllInvestmentSpecialtyType() {
    let payload = null;
    try {
      let res = await axios.get("/LookUpAPI/GetAllInvestmentSpecialtyType");
      payload = res.data;
    } catch (e) {
    }
    return {
      type: "Investment_Specialty_Type",
      payload,
    };
  }

  export async function getAllActivity() {
    let payload = null;
    try {
      let res = await axios.get("/LookUpAPI/GetAllActivity");
      payload = res.data;
    } catch (e) {
    }
    return {
      type: "Activity",
      payload,
    };
  }

  export async function getAllIndustrialZone() {
    let payload = null;
    try {
      let res = await axios.get("/LookUpAPI/GetAllIndustrialZone");
      payload = res.data;
    } catch (e) {
    }
    return {
      type: "Industrial_Zone",
      payload,
    };
  }

  export async function getInvestmentOpportunitiesDetails(id) {
    let payload = null;
    try {
      let response = await axios.get(`/InvestmentAPI/Details/${id}`);
      payload = await response.data;
    } catch (error) {
    }
    return {
      type: "INVESTMENT_OPPORTUNITIES_DETAILS",
      payload,
    };
  }
  
  export function clearInvestmentOpportunitiesDetails() {
    return {
      type: "CLEAR_INVESTMENT_OPPORTUNITIES_DETAILS",
      payload: null,
    };
  }