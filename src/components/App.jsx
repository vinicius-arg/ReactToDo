import React, { useState, useEffect } from "react";
import Title from "./Title";
import Navbar from "./Navbar";
import Container from "./Container";
import Note from "../classes/Note";
import Task from "../classes/Task";

/*

* Lidar com nomes grandes demais
* Lidar com localStorage

*/

const APP_DATA_KEY = "appData";

function App() {
    const [id, setId] = useState(null);
    const [notes, setNotes] = useState([]);

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

    // Handle what note container shows by id
    function handleNotes(newId) {
        setId(newId);
    }

    function addNote(note) {
        setNotes([...notes, note]);
    }

    function addTask(task) {
        const newNotes = [...notes];
        newNotes[id].content.push(task);

        setNotes(newNotes);
    }

    // Closes the note in container in case of open-deleted
    function closeNote(childId) {
        if (childId === id) setId(null);
    }

    // Mark a task as completed
    function doneTask(event, taskId) {
        if (notes[id]) {
            const newNotes = [...notes];
            newNotes[id].content.map(item => {
                if (item.id === taskId) item.done = event.target.checked;
            });

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

    return(<>
        <main>
            <aside className="toolbar">
                <Title title="Your Tasks"></Title>
                <Navbar notes={notes} handleNotes={handleNotes} addNote={addNote} delNote={delNote} closeNote={closeNote}></Navbar>
            </aside>
            <section className="note-content">
                <Container note={notes[id]} id={id} addTask={addTask} doneTask={doneTask} delTask={delTask}></Container>
            </section>
        </main>
    </>);
}

export default App;