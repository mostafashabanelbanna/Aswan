
export function GovernerComponents(state = {}, action) {
    switch (action.type) {
        
        case "EX_CONSERVATIVES":
            return{...state , exconservatives:action.payload}
            case "LEADERS":
            return{...state , leaders:action.payload}

          default:
            return state;

    }}