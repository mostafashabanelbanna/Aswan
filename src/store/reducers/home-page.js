export function homeComponents(state = {}, action) {
  switch (action.type) {
    //navbar items
    case 'CITIES':
      return { ...state, citiesList: action.payload };
    case "CLEAR_CITIES":
      return { ...state, citiesList: action.payload };
    case "CITY_DETAILS":
      return { ...state, cityDetails: action.payload };
    case "CLEAR_CITY_DETAILS":
      return { ...state, cityDetails: action.payload };

    //government projects reducers
    case "PROJECTS_SLIDER":
      return { ...state, projectsSlider: action.payload };
    case "PROJECT_DETAILS":
      return { ...state, projectDetails: action.payload };
    case "CLEAR_DATA":
      return { ...state, projectDetails: action.payload }
    case "PROJECTS_LIST":
      return { ...state, projectsList: action.payload };
    case "CLEAR_PROJECTS_LIST":
      return { ...state, projectsList: action.payload };
    case "NATIONAL_PROJECTS_SECTORS":
      return { ...state, projectsSectors: action.payload };
      
    //photo album reducers
    case "PHOTOS_ALBUM":
      return { ...state, photosAlbum: action.payload };

    case "PHOTOS_LIST":
      return { ...state, photosList: action.payload };
    
    case "CLEAR_PHOTOS_LIST":
      return { ...state, photosList: action.payload };

    case "PHOTO_DETAILS":
      return { ...state, photoDetails: action.payload };
      
    case "CLEAR_PHOTO_DETAILS":
      return { ...state, photoDetails: action.payload };

    //agenda
    // case "EVENTS_LIST":
    //   return { ...state, eventsList: action.payload };
      case "EVENT_OF_MONTH":
      return { ...state, eventsList: action.payload };
      
    //important portals reducers
    case "PORTALS_LIST":
      return { ...state, portalsList: action.payload };

    //Government Famous reducers
    case "FAMOUS_PEOPLE_LIST": 
      return { ...state, famousList: action.payload };

    //VIDEO
    case 'SLIDER_VIDEO':
      return { ...state, slidervideo: action.payload }

    case "MAIN_VIDEO":
      return { ...state, mainVideo: action.payload }

    case "VIDEO_LIST":
      return { ...state, videosList: action.payload }

    case "CLEAR_VIDEO_LIST":
      return { ...state, videosList: action.payload }

    case "VIDEO_DETAILS":
      return { ...state, videoDetails: action.payload };

    case "CLEAR_VIDEO_DETAILS":
      return { ...state, videoDetails: action.payload }
    //News
    case 'SLIDER_NEWS':
      return { ...state, slidernews: action.payload }

    case 'MAIN_NEWS':
      return { ...state, mainews: action.payload }

    case 'NEWS_LIST':
      return { ...state, newslist: action.payload }

    case 'CLEAR_NEWS_LIST':
      return { ...state, newslist: action.payload }
    case 'COMPLAINT':
      return { ...state, complaint: action.payload }
    case 'CLEAR_NEWS_DETAILS':
      return { ...state, newsdetails: action.payload }
    case 'NEWS_DETAILS':
      return { ...state, newsdetails: action.payload }
    case 'NEWS_CATEGORY':
      return { ...state, categories: action.payload }
    case 'NEWS_SECTORS':
      return { ...state, sectors: action.payload }

    //haya carema
    case 'HAYA_CARIMA':
      return { ...state, hayacarima: action.payload }
    case 'CLEAR_HAYA_CARIMA':
      return { ...state, hayacarima: action.payload }
          
    default:
      return state;
  }
}