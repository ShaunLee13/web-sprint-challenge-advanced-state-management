import { PAGE_LOAD, FORM_SUBMIT_SUCCESS } from "../actions/smurfActions"

export const initialSmurfs = {
    list : []
}

export const reducer = (state=initialSmurfs, action) => {
    switch(action.type){
        case PAGE_LOAD:
            return {...state, 
                list:action.payload}
        case FORM_SUBMIT_SUCCESS:
            return {
                ...state, 
                list:action.payload}
              
        default:
            return state
    }
}