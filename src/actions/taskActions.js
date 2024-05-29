const addTaskAction = task => {
    return {
        type: "ADD_TASK",
        payload: {
            task
        }
    }
};

const deleteTaskAction = id => {
    return {
        type: "DELETE_TASK",
        payload: {
            id
        }
    }
};

const taskActions = {
    add: addTaskAction,
    delete: deleteTaskAction
};

export default taskActions;