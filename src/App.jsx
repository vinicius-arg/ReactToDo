import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

import { pullNotes } from "./storageManager";

const MOBILE_WINDOW_SIZE = 500;

function App() {
    const dispatch = useDispatch();

    const [navScreen, setNavScreen] = useState(true);
    const [noteScreen, setNoteScreen] = useState(window.innerWidth > MOBILE_WINDOW_SIZE);

    // Pulls saved notes if it exists. Executes one time when page loads. 
    useEffect(() => { pullNotes(dispatch) }, []);

    function switchScreen() {
        setNoteScreen(false);
        setNavScreen(true);
    }

    function handleResize() {
        if (window.innerWidth > MOBILE_WINDOW_SIZE) {
            setNavScreen(true);
            setNavScreen(true);
        }  
    }

    window.onresize = handleResize;

    return(<main>
            { navScreen 
            ? <aside className="toolbar">
                <Title title="Your Tasks" />
                <Navbar /> 
            </aside>  
            : <></> }
            { noteScreen 
            ? <section className="note-content">
                <Container switchScreen={switchScreen} />
                </section> 
            : <></> }
        </main>);
}

export default App;