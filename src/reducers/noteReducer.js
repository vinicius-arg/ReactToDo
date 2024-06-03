import { produce } from "immer";

const noteReducer = produce((draft, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            draft.push(action.payload.note);
            break;
        case "DELETE_NOTE":
            draft.splice(action.payload.id, 1, null);
            break;
        case "LOAD_NOTES":
            Object.assign(draft, action.payload.notes);
            break;
        case "ADD_TASK":
            draft[action.payload.noteId].content.push(action.payload.task);
            break;
        case "DELETE_TASK":
            draft[action.payload.noteId].content.splice(action.payload.taskId, 1, null);
            break;
        case "TOGGLE_TASK":
            const task = draft[action.payload.noteId].content.find(item => item.id === action.payload.taskId);
            task.done = !task.done;
            break;
        default:
            break;
    }
}, []);

export default noteReducer;