export function homeComponents(state = {}, action) {
  switch (action.type) {
    //government projects reducers
    case "PROJECTS_LIST":
      return { ...state, projectsList: action.payload };
    case "PROJECT_DETAILS":
      return { ...state, projectDetails: action.payload };
    case "CLEAR_DATA":
      return { ...state, projectDetails: action.payload }

    //photo album reducers
    case "PHOTOS_ALBUM_LIST":
      return { ...state, photosList: action.payload };

    //important portals reducers
    case "PORTALS_LIST":
      return { ...state, portalsList: action.payload };

    case 'SLIDER_NEWS':
      return { ...state, slidernews: action.payload }

    case 'SLIDER_VIDEO':
      return { ...state, slidervideo: action.payload }

    case 'MAIN_NEWS':
      return { ...state, mainews: action.payload }

    case 'NEWS_LIST':
      return { ...state, newslist: action.payload }

    case 'CLEAR_NEWS_LIST':
      return { ...state, newslist: action.payload }
      case 'COMPLAINT':
        return { ...state, complaint: action.payload }
      
    default:
      return state;
  }
}