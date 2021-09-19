export function touristHome(state = {}, action) {
    switch (action.type) {
          case "SLIDER_VIDEO":
          return { ...state, slidervideo: action.payload };
          case "PHOTO_ALBUM":
            return { ...state, photosList: action.payload };
          
      default:
        return state;
    }
  }
  