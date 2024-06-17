import { MOBILE_WINDOW_SIZE, TABLET_WINDOW_SIZE } from "../constants";

function textLimitReducer(state=16, action) {
    switch (action.type) {
        case "SET_LIMIT":
            if (action.payload <= MOBILE_WINDOW_SIZE)
                return 24;
            else if (action.payload <= TABLET_WINDOW_SIZE)
                return 12;
            else if (action.payload > TABLET_WINDOW_SIZE)
                return 16;
            else
                return state;
        default:
            return state;
    }
}

export default textLimitReducer;