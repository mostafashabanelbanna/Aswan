export function staticContent(state = {}, action) {
  switch (action.type) {
    case "STATIC_CONTENT":
      return { ...state, allStaticContent: action.payload };

    case "CLEAR_STATIC_CONTENT":
      return { ...state, allStaticContent: action.payload };

    case "STATIC_CONTENT_DETAILS":
      return { ...state, staticContentDetails: action.payload };

    case "CLEAR_STATIC_CONTENT_DETAILS":
      return { ...state, staticContentDetails: action.payload };
    default:
      return state;
  }
}
