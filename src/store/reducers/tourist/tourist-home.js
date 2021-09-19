export function touristHome(state = {}, action) {
    switch (action.type) {
        case "SLIDER_VIDEO":
            return { ...state, slidervideo: action.payload };
        case "PHOTO_ALBUM":
            return { ...state, photosAlbum: action.payload };
        case "MAIN_VIDEO":
            return { ...state, mainVideo: action.payload };

        default:
            return state;
    }
}
