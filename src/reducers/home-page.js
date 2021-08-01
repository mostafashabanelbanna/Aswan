export function homeComponents (state = {}, action){
    switch(action.type){
        case "PROJECTS_LIST":
            return {...state, projectsList:action.payload};

            case 'SLIDER_NEWS':
            return {...state , slidernews:action.payload}
            
            case 'SLIDER_VIDEO':
            return {...state , slidervideo:action.payload}
            
            case 'MAIN_NEWS':
            return {...state , mainews:action.payload}
            
        default:
            return state;
    }
}