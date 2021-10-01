export function investorHome(state = {}, action) {
  switch (action.type) {
    case "SLIDER_VIDEO":
      return { ...state, slidervideo: action.payload };
    case "PHOTO_ALBUM":
      return { ...state, photosAlbum: action.payload };
    case "MAIN_VIDEO":
      return { ...state, mainVideo: action.payload };
    case "SLIDER_NEWS":
      return { ...state, sliderNews: action.payload };
    case "CLEAR_SLIDER_NEWS":
      return { ...state, sliderNews: action.payload };

    //agenda
    case "EVENTS_LIST":
      return { ...state, eventsList: action.payload };
    case "CLEAR_AllEventsInvestor":
      return { ...state, eventsList: action.payload };

    //map slider
    case "MAP_SLIDER":
      return { ...state, sliderMap: action.payload };

    case "CLEAR_MAP_SLIDER":
      return { ...state, sliderMap: action.payload };

    //investment Opportunities
    case "FOCUSED_OPPORTUNITIES":
      return { ...state, focusedOpportunities: action.payload };
    
    case "INVESTOR_OPPORTUNITIES_LIST":
      return { ...state, investorOpportunitiesList: action.payload };

    case "CLEAR_INVESTOR_OPPORTUNITIES_LIST":
      return { ...state, investorOpportunitiesList: action.payload };

    case "Investment_Payment_System":
      return { ...state, investorPaymentSystem: action.payload };

    case "Investment_Specialty_Type":
      return { ...state, investorSpecialtyType: action.payload };

    case "Activity":
      return { ...state, activity: action.payload };

    case "Industrial_Zone":
      return { ...state, industrialZone: action.payload };

    case "INVESTMENT_OPPORTUNITIES_DETAILS":
      return { ...state, investmentOpportunitiesDetails: action.payload };

    case "CLEAR_INVESTMENT_OPPORTUNITIES_DETAILS":
      return { ...state, investmentOpportunitiesDetails: action.payload };

    default:
      return state;
  }
}
