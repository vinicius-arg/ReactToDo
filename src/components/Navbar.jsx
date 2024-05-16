import React, { useState } from "react";
import Item from "./Item";
import Form from "./Form";
import Note from "../classes/Note";

function Navbar({notes, handleNotes, addNote, delNote, closeNote}) {
    const [formVisible, setFormVisible] = useState(false);

    function showForm() {
        setFormVisible(true);
    }

    function hideForm() {
        setFormVisible(false);
    }
    
    return(<nav className="navbar">
            <ul>
                { notes.map(item => item ? <Item handleClick={handleNotes} delTask={() => {}} delNote={delNote} title={item.title} id={item.id} closeNote={closeNote} /> : <></>) } 
                <li className="create-btn" onClick={showForm} key="#"><button>+ Create new note</button></li>
            </ul>
            { formVisible ? <Form title="Create new note" hideForm={hideForm} onAdd={addNote} Class={Note}/> : <></>}
        </nav>);
}

export default Navbar;