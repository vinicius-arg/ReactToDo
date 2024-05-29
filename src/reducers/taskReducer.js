function taskReducer(state=[], action) {
    switch(action.type) {
        case "ADD_TASK":
            return [...state, action.payload.task];
        case "DELETE_TASK":
            return [...state].filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
}

export default taskReducer;