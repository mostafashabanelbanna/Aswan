



export function EServicesComponents(state = {}, action) {
    switch (action.type) {
      //government projects reducers
      case "ESERVICES":
          return{...state , allServices:action.payload}
      case "CLEAR_ESERVICES":
          return{...state , allServices:action.payload}
      case "CITY_CATEGORY":
        return{...state , allCities:action.payload}
      case "DIRECTORY_CATEGORY":
        return{...state , allDirectoryCategories:action.payload}
      case "DIRECTORY_TYPE":
        return{...state , allDirectoryTypes:action.payload}
      default:
        return state;
    }
  }