export function adsComponents(state = {}, action) {
    switch (action.type) {
      case "ADS":
        return { ...state, ads: action.payload };

      default:
        return state;
    }
  }