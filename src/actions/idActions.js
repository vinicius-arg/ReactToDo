const setIdAction = id => {
    return {
        type: "SET",
        payload: { id }
    }
};

const idActions = {
    set: setIdAction
};

export default idActions;