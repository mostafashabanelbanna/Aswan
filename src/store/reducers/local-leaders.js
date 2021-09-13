export function LocalLeadersComponents(state = {}, action) {
    switch (action.type) {
      //Tribe
      case "TRIBE":
          return{...state , allTribe:action.payload}
      case "CLEAR_TRIBE":
          return{...state , allTribe:action.payload}
      case "TRIBE_CITY":
        return{...state , allCities:action.payload}
    
      //parliament
      case 'PARLIAMENT':
        return{...state , allParliament:action.payload}

      //senate
      case 'SENATE':
        return{...state , allSenate:action.payload}

    default:
        return state;
    }
}