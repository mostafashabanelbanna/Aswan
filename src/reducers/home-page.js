export function homeComponents (state = {}, action){
    switch(action.type){
        case "PROJECTS_LIST":
            return {...state, projectsList:action.payload};
        default:
            return state;
    }
}