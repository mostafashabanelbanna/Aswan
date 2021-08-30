



export function EServicesComponents(state = {}, action) {
    switch (action.type) {
      //government projects reducers
      case "ESERVICES":
          return{...state , allServices:action.payload}
      default:
        return state;
    }
  }