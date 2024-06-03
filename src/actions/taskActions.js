const addTaskAction = (noteId, task) => {
    return {
        type: "ADD_TASK",
        payload: { noteId, task }
    }
};

const deleteTaskAction = (noteId, taskId) => {
    return {
        type: "DELETE_TASK",
        payload: { noteId, taskId }
    }
};

const doneTaskAction = (done, noteId, taskId) => {
    return {
        type: "DONE",
        payload: { done, noteId, taskId }
    }
}

const taskActions = {
    add: addTaskAction,
    delete: deleteTaskAction,
    done: doneTaskAction
};

export default taskActions;