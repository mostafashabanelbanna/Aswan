export function advertismentComponents(state = {}, action) {
    switch (action.type) {
      case "ADVERTISMENT_LIST":
        return { ...state, advertisment: action.payload };
      case "ADVERTISMENT_ALL":
        return { ...state, advertisment: action.payload };
        case "ADVERTISMENT_TYPE":
            return { ...state, advertismentTypes: action.payload };
        case "YOUTH_EMPLOYENT":
          return { ...state, youthemp: action.payload };
          case "CAREER":
          return { ...state, career: action.payload };
          
      default:
        return state;
    }
  }
  