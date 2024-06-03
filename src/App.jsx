import React, { useState, useEffect } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import idReducer from "./reducers/idReducer";
import noteReducer from "./reducers/noteReducer";

import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

import Note from "./classes/Note";
import Task from "./classes/Task";

const APP_DATA_KEY = "appData";
const MOBILE_WINDOW_SIZE = 500;

const store = configureStore({
    reducer: {
        id: idReducer,
        note: noteReducer,
    }
});

store.subscribe(() => { console.log(store.getState()) });

function App() {
    const [notes, setNotes] = useState([]);
    const [navScreen, setNavScreen] = useState(true);
    const [noteScreen, setNoteScreen] = useState(window.innerWidth > MOBILE_WINDOW_SIZE);

    // Pulls saved notes if it exists. Executes one time when page loads.
    useEffect(() => {
        const appData = JSON.parse(localStorage.getItem(APP_DATA_KEY));
        let localNotes = appData ? appData.savedNotes : [];

        if (localNotes && localNotes.length) {
            setNotes(localNotes);
            Note.lastId = appData.lastId;
            Task.lastTaskIds = [...appData.taskIdArray];
        }
    }, []);

    // Save notes and important parameters on every change.
    useEffect(() => {
        const appData = {
            savedNotes: notes,
            lastId: Note.lastId,
            taskIdArray: Task.lastTaskIds
        };

        localStorage.setItem(APP_DATA_KEY, JSON.stringify(appData));
    }, [notes]);

    function switchScreen() {
        setNoteScreen(false);
        setNavScreen(true);
    }

    function handleResize() {
        if (window.innerWidth > MOBILE_WINDOW_SIZE) {
            setNavScreen(true);
            setNavScreen(true);
        }  
    }

    window.onresize = handleResize;

    return(<main>
            <Provider store={store}>
                { navScreen ? 
                    <aside className="toolbar">
                        <Title title="Your Tasks" />
                        <Navbar /> 
                    </aside>  
                : <></> }
                { noteScreen ? 
                    <section className="note-content">
                        <Container switchScreen={switchScreen} />
                    </section> 
                : <></> }
        </Provider>
        </main>);
}

export default App;