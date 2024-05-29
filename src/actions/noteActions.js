const addNoteAction = note => {
    return {
        type: "ADD_NOTE",
        payload: {
            note
        }
    }
};

const deleteNoteAction = id => {
    return {
        type: "DELETE_NOTE",
        payload: {
            id
        }
    }
};

const noteActions = {
    add: addNoteAction,
    delete: deleteNoteAction
};

export default noteActions;