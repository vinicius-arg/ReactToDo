import { configureStore } from "@reduxjs/toolkit";
import idReducer from "./reducers/idReducer";
import noteReducer from "./reducers/noteReducer";

import { saveNotes } from "./storageManager";

const store = configureStore({
    reducer: {
        id: idReducer,
        note: noteReducer,
    }
});

store.subscribe(() => { saveNotes(store.getState().note) });

export default store;