import React, { useState } from "react";
import saveNotes from "../saveNotes";
import Title from "./Title";
import Navbar from "./Navbar";
import Container from "./Container";

/*

* Lidar com nomes grandes demais
* Lidar com localStorage

*/

function App() {
    // const localNotes = JSON.parse(localStorage.getItem("notes")) || [];

    const [id, setId] = useState(null);
    const [notes, setNotes] = useState([]);

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

    function delTask(taskId) {
        const newNotes = [...notes];
        newNotes[id].content = [...newNotes[id].content.filter(item => item.id !== taskId)];
        
        setNotes(newNotes);
    }

    return(<>
        <main>
            <aside className="toolbar">
                <Title title="Your Tasks"></Title>
                <Navbar notes={notes} handleNotes={handleNotes} addNote={addNote} closeNote={closeNote}></Navbar>
            </aside>
            <section className="note-content">
                <Container note={notes[id]} id={id} addTask={addTask} doneTask={doneTask} delTask={delTask}></Container>
            </section>
        </main>
    </>);
}

export default App;