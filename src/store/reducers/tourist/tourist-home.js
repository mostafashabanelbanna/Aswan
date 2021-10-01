export function touristHome(state = {}, action) {
  switch (action.type) {
    case "SLIDER_VIDEO":
      return { ...state, slidervideo: action.payload };
    case "PHOTO_ALBUM":
      return { ...state, photosAlbum: action.payload };
    case "MAIN_VIDEO":
      return { ...state, mainVideo: action.payload };
    case "SLIDER":
      return { ...state, slider: action.payload };
    case "CLEAR_SLIDER":
      return { ...state, slider: action.payload };

    //agenda
    case "EVENTS_LIST":
      return { ...state, eventsList: action.payload };

      case "CLEAR_AllEventsTourist":
        return { ...state, eventsList: action.payload };
    default:
      return state;
  }
}
