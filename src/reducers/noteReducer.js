function noteReducer(state=[], action) {
    switch(action.type) {
        case "ADD_NOTE":
            return [...state, action.payload.note];
        case "DELETE_NOTE":
            return [...state].filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
}

export default noteReducer;