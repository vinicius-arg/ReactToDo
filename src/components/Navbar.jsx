import React, { useState } from "react";
import Item from "./Item";
import Form from "./Form";
import Note from "../classes/Note";

function Navbar({notes, handleNotes, addNote, closeNote}) {
    const [showForm, setShowForm] = useState(false);

    function add() {
        setShowForm(true);
    }

    function hideForm() {
        setShowForm(false);
    }

    return(<nav className="navbar">
            <ul>
                {notes.map(item => <Item handleClick={handleNotes} title={item.title} id={item.id} close={closeNote}/>)} 
                <li className="create-btn" onClick={add} key="#">+ Create new note</li>
            </ul>
            { showForm ? <Form title="Create new note" hideForm={hideForm} onAdd={addNote} Class={Note}/> : <></>}
        </nav>);
}

export default Navbar;