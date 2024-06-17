import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Item from "./Item";

function Navbar({limit}) {
    const notes = useSelector(state => state.note);
    const isMobile = useSelector(state => state.isMobile);

    return(
        <nav className="navbar">
            <ul>
                { notes.map(note => note && isMobile
                    ? <NavLink to={`/notes/${note.id}`}><Item key={note.id} id={note.id} title={note.title}/></NavLink> 
                    : (note ? <Item key={note.id} id={note.id} title={note.title} limit={limit}/> : <></>))
                } 
                <Link to="/form/note">
                    <li className="create-btn"><button>+ Create new note</button></li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;