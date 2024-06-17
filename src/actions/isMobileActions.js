const setMobileLayoutAction = windowSize => {
    return { type: "SET_MOBILE_LAYOUT", payload: windowSize };
}

const isMobileActions = {
    set: setMobileLayoutAction
};

export default isMobileActions;