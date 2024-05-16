import React, { useState, useEffect } from "react";
import Item from "./Item";
import Form from "./Form";
import Note from "../classes/Note";

const MOBILE_WINDOW_SIZE = 500;

function Navbar({notes, handleNotes, addNote, delNote, closeNote}) {
    const [formVisible, setFormVisible] = useState(false);
    const [limit, setLimit] = useState(16);
    
    useEffect(() => {
        setLimit(window.innerWidth >= 700 ? 16 : (window.innerWidth >= MOBILE_WINDOW_SIZE ? 12 : 32));
    }, []);

    function handleResize() {
        setLimit(window.innerWidth >= 700 ? 16 : (window.innerWidth >= MOBILE_WINDOW_SIZE ? 12 : 32));
    }

    function showForm() {
        setFormVisible(true);
    }

    function hideForm() {
        setFormVisible(false);
    }

    window.onresize = handleResize;
    
    return(<nav className="navbar">
            <ul>
                { notes.map(item => item ? <Item handleClick={handleNotes} delTask={() => {}} delNote={delNote} title={item.title} id={item.id} closeNote={closeNote} limit={limit} /> : <></>) } 
                <li className="create-btn" onClick={showForm} key="#"><button>+ Create new note</button></li>
            </ul>
            { formVisible ? <Form title="Create new note" hideForm={hideForm} onAdd={addNote} Class={Note}/> : <></>}
        </nav>);
}

export default Navbar;