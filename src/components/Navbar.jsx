import React from "react";
import Item from "./Item";
import Form from "./Form";
import Note from "../classes/Note";

function Navbar({notes, handleNotes, addNote, closeNote}) {
    function add() {
        console.log('new note');
    }

    return(<nav className="navbar">
            <ul>
                {notes.map(item => <Item handleClick={handleNotes} title={item.title} id={item.id} closeNote={closeNote}></Item>)} 
                <li onClick={add} key="#">+ Create new note</li>
            </ul>
            <Form onAdd={addNote} Class={Note}></Form>
        </nav>);
}

export default Navbar;