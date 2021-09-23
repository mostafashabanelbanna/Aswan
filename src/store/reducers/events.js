export function eventsComponents(state = {}, action) {
  switch (action.type) {
    case "EVENTS_LIST":
      return { ...state, eventsList: action.payload };

    case "CLEAR_EVENTS_LIST":
      return { ...state, eventsList: action.payload };

    case "EVENTS_TYPES":
      return { ...state, eventsTypes: action.payload };

    case "EVENTS_SECTORS":
      return { ...state, eventsSectors: action.payload };

    case "EVENT_DETAILS":
      return { ...state, eventDetails: action.payload };

    case "CLEAR_EVENT_DETAILS":
      return { ...state, eventDetails: action.payload };

    default:
      return state;
  }
}
