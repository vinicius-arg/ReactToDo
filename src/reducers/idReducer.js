function idReducer(state=null, action) {
    switch (action.type) {
        case "SET":
            return action.payload.id;
        default:
            return state;
    }
}

export default idReducer;