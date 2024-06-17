import { MOBILE_WINDOW_SIZE } from "../constants";

const initialState = window.innerWidth <= MOBILE_WINDOW_SIZE;

function isMobileReducer(state=initialState, action) {
    switch(action.type) {
        case "SET_MOBILE_LAYOUT":
            if (action.payload <= MOBILE_WINDOW_SIZE)
                return true;
            else 
                return false;
        default:
            return state;
    }
}

export default isMobileReducer;