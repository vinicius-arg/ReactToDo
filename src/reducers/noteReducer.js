let newState;

function noteReducer(state=[], action) {
    switch(action.type) {
        case "ADD_NOTE":
            return [...state, action.payload.note];
        case "DELETE_NOTE":
            return [...state].splice(action.payload.id, 0, null);
        case "ADD_TASK":
            newState = [...state];
            newState[action.payload.noteId] = {
                ...newState[action.payload.noteId],
                content: [...newState[action.payload.noteId]?.content, action.payload.task]
            };
            return newState;
        case "DELETE_TASK":
            newState = [...state];
            console.log(action.payload)
            newState[action.payload.noteId] = {
                ...newState[action.payload.noteId],
                content: newState[action.payload.noteId].content.filter(item => item.id !== action.payload.taskId)
            };
            return newState;
        case "DONE":
            newState = [...state];
            newState[action.payload.noteId].content.map(item => { 
                if (item.id == action.payload.taskId) return { ...item, done: true };
            });
            return newState;
        default:
            return state;
    }
}

export default noteReducer;