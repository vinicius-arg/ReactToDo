import React from "react";
import Form from "./Form";
import Note from "../classes/Note";
import Item from "./Item";

function Navbar(props) {
    return(<nav className="navbar">
            <ul>
                {props.notes.map(item => <Item handleClick={props.handleNotes} title={item.title} id={item.id} closeNote={props.closeNote} />)} 
                <li className="create-btn" onClick={props.showForm} key="#">+ Create new note</li>
            </ul>
            { props.formVisible ? <Form  title="Create new note" hideForm={props.hideForm} onAdd={props.addNote} class={Note}/> : <></> }
        </nav>);
}

export default Navbar;