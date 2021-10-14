export function LocalLeadersComponents(state = {}, action) {
  switch (action.type) {
    //Tribe
    case "TRIBE":
      return { ...state, allTribe: action.payload };
    case "CLEAR_TRIBE":
      return { ...state, allTribe: action.payload };
    case "TRIBE_CITY":
      return { ...state, allCities: action.payload };

    //parliament
    case "PARLIAMENT":
      return { ...state, allParliament: action.payload };

    //senate
    case "SENATE":
      return { ...state, allSenate: action.payload };

    //NationalCouncil
    case "NationalCouncil":
      return { ...state, NationalCouncil: action.payload };
    case "CLEAR_NationalCouncil":
      return { ...state, NationalCouncil: action.payload };
    case "NationalCouncil_DETAILS":
      return { ...state, NationalCouncilDetails: action.payload };

    //Society
    case "Society":
      return { ...state, Society: action.payload };
    case "Society_DETAILS":
      return { ...state, SocietyDetails: action.payload };

    default:
      return state;
  }
}
