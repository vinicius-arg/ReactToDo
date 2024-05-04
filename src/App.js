import React, { useState } from "react";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

function App() {
    const [id, setId] = useState(null);
    const [notes, setNotes] = useState([]);
    const [formVisible, setFormVisible] = useState(false);

    function showForm() {
        setFormVisible(true);
    }

    function hideForm() {
        setFormVisible(false);
    }

    // Handle what note container shows by id
    function handleNotes(id) {
        setId(id);
    }

    function addNote(item) {
        setNotes([...notes, item]);
    }

    function updateNotes(tasks) {
        if (notes[id]) {
            console.log(notes[id], tasks)
            let newNotes = [...notes];
            newNotes[id].content = [...tasks];
    
            setNotes(newNotes);
        }
    }
    
    // Closes the note in container in case of open-deleted
    function closeNote(childId) {
        if (childId === id) setId(null);
    }

    return(<>
        <main>
            <aside className="toolbar">
                <Title title="Your Tasks" />
                <Navbar notes={notes} handleNotes={handleNotes} closeNote={closeNote} addNote={addNote} showForm={showForm} hideForm={hideForm} formVisible={formVisible}/>
            </aside>
            <section className="note-content">
                <Container note={notes[id]} id={id} updateNotes={updateNotes} showForm={showForm} hideForm={hideForm} formVisible={formVisible} />
            </section>
        </main>
    </>);
}

export default App;