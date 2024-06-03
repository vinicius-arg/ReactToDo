const addNoteAction = note => {
    return {
        type: "ADD_NOTE",
        payload: { note }
    }
};

const deleteNoteAction = id => {
    return {
        type: "DELETE_NOTE",
        payload: { id }
    }
};

const loadNotesAction = notes => {
    return {
        type: "LOAD_NOTES",
        payload: { notes }
    }
};

const noteActions = {
    add: addNoteAction,
    delete: deleteNoteAction,
    load: loadNotesAction
};

export default noteActions;