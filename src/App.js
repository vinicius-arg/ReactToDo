import React, { useState } from "react";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

function App() {
    const [id, setId] = useState(null);
    const [items, setItems] = useState([]);
    const [tasks, setTasks] = useState(items[id] ? items[id].content : []);

    // Handle what note container shows by id
    function handleNotes(id) {
        setId(id);
    }

    function addNote(item) {
        setItems([...items, item]);
    }

    function addTask(task) {
        let newItems = [...items];
        newItems[id].content.push(task); 

        setTasks([...items[id].content, task]);
        setItems(newItems);
    }

    // Closes the note in container in case of open-deleted
    function closeNote(childId) {
        if (childId === id) setId(null);
    }

    // Mark a task as completed
    function doneTask(event, taskId) {
        let newTasks = [...tasks];
        newTasks[taskId].done = event.target.checked;

        setTasks([...tasks]);
    }

    return(<>
        <main>
            <aside className="toolbar">
                <Title title="Your Tasks"></Title>
                <Navbar notes={items} handleNotes={handleNotes} addNote={addNote} closeNote={closeNote}></Navbar>
            </aside>
            <section className="note-content">
                <Container note={items[id]} tasks={tasks} id={id} addTask={addTask} doneTask={doneTask}></Container>
            </section>
        </main>
    </>);
}

export default App;