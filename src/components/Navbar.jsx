import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Item from "./Item";
import Form from "./Form";
import Note from "../classes/Note";

const MOBILE_WINDOW_SIZE = 500;

function Navbar() {
    const notes = useSelector(state => state.note);

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
                { notes.map(note => note ? <Item key={note.id} id={note.id} title={note.title} limit={limit} /> : <></>) } 
                <li className="create-btn" onClick={showForm}><button>+ Create new note</button></li>
            </ul>
            { formVisible ? <Form title="Create new note" hideForm={hideForm} Class={Note}/> : <></>}
        </nav>);
}

export default Navbar;