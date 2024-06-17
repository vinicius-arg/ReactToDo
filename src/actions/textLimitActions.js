const setLimitAction = windowSize => {
    return { type: "SET_LIMIT", payload: windowSize };
}
const textLimitActions = {
    set: setLimitAction
};

export default textLimitActions;