export function EServicesComponents(state = {}, action) {
  switch (action.type) {
    //E-Service
    case "ESERVICES":
      return { ...state, allServices: action.payload };
    case "CLEAR_ESERVICES":
      return { ...state, allServices: action.payload };
    case "CITY_CATEGORY":
      return { ...state, allCities: action.payload };
    case "DIRECTORY_CATEGORY":
      return { ...state, allDirectoryCategories: action.payload };
    case "CLEAR_DIRECTORY_CATEGORY":
      return { ...state, allDirectoryCategories: action.payload };
    case "DIRECTORY_TYPE":
      return { ...state, allDirectoryTypes: action.payload };

    //E-Service-Directory
    case "ESERVICE_DIRECTORIES":
      return { ...state, allServiceDirectories: action.payload };
    case "CLEAR_ESERVICES_DIRECTORIES":
      return { ...state, allServiceDirectories: action.payload };
    case "ESERVICE_DIRECTORY_TYPES":
      return { ...state, allServiceDirectoryTypes: action.payload };

    //Directorate-services
    case "DIRECTORATES":
      return { ...state, allDirectorates: action.payload };
    case "CLEAR_DIRECTORATES":
      return { ...state, allDirectorates: action.payload };
    case "DIRECTORATE_DETAILS":
      return { ...state, directoratesDetails: action.payload };
    //Advertisements
    case "ADVERTISEMENTS":
      return { ...state, allAdvertisements: action.payload };
    case "CLEAR_DIRECTORATES":
      return { ...state, allAdvertisements: action.payload };
    case "ADVERTISEMENT_TYPES":
      return { ...state, allAdvertisementTypes: action.payload };

    default:
      return state;
  }
}
