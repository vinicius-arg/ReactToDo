import { configureStore } from "@reduxjs/toolkit";
import idReducer from "./reducers/idReducer";
import noteReducer from "./reducers/noteReducer";
import textLimitReducer from "./reducers/textLimitReducer";
import isMobileReducer from "./reducers/isMobileReducer";
import { saveNotes, pullNotes } from "./storageManager";

const preloadedState = {
    note: pullNotes()
};

const store = configureStore({
    reducer: {
        id: idReducer,
        note: noteReducer,
        textLimit: textLimitReducer,
        isMobile: isMobileReducer
    }, preloadedState
});

store.subscribe(() => { saveNotes(store.getState().note) });

export default store;