import React, { useState, useEffect } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useSelector } from "react-redux";

import idReducer from "./reducers/idReducer";
import noteReducer from "./reducers/noteReducer";
import taskReducer from "./reducers/taskReducer";

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
        task: taskReducer
    }
})

function App() {
    const id = 1;
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

    // Mark a task as completed
    function doneTask(event, taskId) {
        if (notes[id]) {
            const newNotes = [...notes];
            newNotes[id].content.map(item => (item.id === taskId) ? item.done = event.target.checked : item);

            setNotes(newNotes);
        }
    }

    function delNote(id) {
        const newNotes = [...notes];
        newNotes[id] = null;
        Task.lastTaskIds[id] = null;

        setNotes(newNotes);
    }

    function delTask(taskId) {
        const newNotes = [...notes];
        newNotes[id].content = [...newNotes[id].content.filter(item => item.id !== taskId)];
        Task.lastTaskIds[id]--;

        setNotes(newNotes);
    }

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

    return(<>
        <main>
            <Provider store={store}>
                { navScreen ? 
                <aside className="toolbar">
                    <Title title="Your Tasks"></Title>
                    <Navbar delNote={delNote}>
                    </Navbar> 
                </aside>  : <></> }
                { noteScreen ? 
                    <section className="note-content">
                    <Container doneTask={doneTask} 
                               delTask={delTask} 
                               switchScreen={switchScreen}>
                    </Container>
                    </section> : <></> }
        </Provider>
        </main>
    </>);
}

export default App;