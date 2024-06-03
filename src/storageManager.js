import noteActions from "./actions/noteActions";

import Note from "./classes/Note";
import Task from "./classes/Task";

const APP_DATA_KEY = "appData";

// Pulls saved notes if it exists.
const pullNotes = dispatch => {
    const appData = JSON.parse(localStorage.getItem(APP_DATA_KEY));
    const localNotes = appData ? appData.savedNotes : [];

    if (localNotes && localNotes.length) {
        Note.nextId = appData.nextId;
        Task.nextTaskIds = [...appData.taskIdArray];
        dispatch(noteActions.load(localNotes));
    }
}

// Save notes and important parameters on every change.
const saveNotes = note => {
    const appData = {
        nextId: Note.nextId,
        savedNotes: note,
        taskIdArray: Task.nextTaskIds,
    };

    localStorage.setItem(APP_DATA_KEY, JSON.stringify(appData));
}

export { pullNotes, saveNotes };