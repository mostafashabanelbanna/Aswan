export function advertismentComponents(state = {}, action) {
  switch (action.type) {
    case "ADVERTISMENT_LIST":
      return { ...state, advertisment: action.payload };
    case "CLEAR_ADVERTISMENT_LIST":
      return { ...state, advertisment: action.payload };

    case "ADVERTISMENT_ALL":
      return { ...state, advertisment: action.payload };
    case "ADVERTISMENT_TYPE":
      return { ...state, advertismentTypes: action.payload };
    case "YOUTH_EMPLOYENT":
      return { ...state, youthemp: action.payload };
    case "CAREER":
      return { ...state, career: action.payload };

    case "CAREER_COUNTER":
      return { ...state, careerCounter: action.payload };

    case "CAREER_DETAILS":
      return { ...state, careerDetails: action.payload };

    case "YOUTH_DETAILS":
      return { ...state, youthDetails: action.payload };

    case "ADS":
      return { ...state, ads: action.payload };
    case "ADVERTISMENT_DETAILS":
      return { ...state, advertismentDetails: action.payload };
    case "CLEAR_ADVERTISMENT_DETAILS":
      return { ...state, advertismentDetails: action.payload };

    case "FOCUSED_AD":
      return { ...state, focusedAd: action.payload };

    default:
      return state;
  }
}
