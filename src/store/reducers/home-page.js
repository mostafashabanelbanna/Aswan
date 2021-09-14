export function homeComponents(state = {}, action) {
  switch (action.type) {
    //navbar items
    case 'CITIES':
      return { ...state, citiesList: action.payload };
    case "CLEAR_CITIES":
      return { ...state, citiesList: action.payload };

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

    //Government Famous reducers
    case "FAMOUS_PEOPLE_LIST": 
      return { ...state, famousList: action.payload };

    //News
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