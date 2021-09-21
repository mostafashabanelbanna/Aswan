export function investorHome(state = {}, action) {
  switch (action.type) {
    case "SLIDER_VIDEO":
      return { ...state, slidervideo: action.payload };
    case "PHOTO_ALBUM":
      return { ...state, photosAlbum: action.payload };
    case "MAIN_VIDEO":
      return { ...state, mainVideo: action.payload };
    case "SLIDER_NEWS":
      return { ...state, sliderNews: action.payload };
    case "CLEAR_SLIDER_NEWS":
      return { ...state, sliderNews: action.payload };

    //agenda
    case "EVENTS_LIST":
      return { ...state, eventsList: action.payload };

    //map slider
    case "MAP_SLIDER":
      return { ...state, sliderMap: action.payload };

    case "CLEAR_MAP_SLIDER":
      return { ...state, sliderMap: action.payload };
    default:
      return state;
  }
}
