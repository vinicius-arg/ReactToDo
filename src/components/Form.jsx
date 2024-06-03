import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import ScreenProtector from "./ScreenProtector";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import noteActions from "../actions/noteActions";
import taskActions from "../actions/taskActions";

function Form({title, hideForm, Class, parentId}) {
    const dispatch = useDispatch();

    const [text, setText] = useState('');
    const inputRef = useRef(null);

    // Focus on input when form opens
    useEffect(() => { inputRef.current.focus(); }, []);

    // Changes the state "text" for the input value
    function handleChange(event) {
        let text = event.target.value;
        setText(text);
    }

    // Dispatch functions
    function addTask(task) {
        let serializableObject = {};
        Object.assign(serializableObject, task);
        dispatch(taskActions.add(parentId, serializableObject));
    }

    function addNote(note) {
        let serializableObject = {};
        Object.assign(serializableObject, note);
        dispatch(noteActions.add(serializableObject));
    }

    // Submits the form
    function addItem(event) {
        event.preventDefault();
        
        if (Class.name === "Note") addNote(new Class(text));
        else if (Class.name === "Task") addTask(new Class(text, parentId));
        else throw console.error("Exception: Invalid class.");

        setText('');
        hideForm();
    }

    function close() {
        hideForm();
    }

    return(<>
        <ScreenProtector/>
        <form className="form">
            <h2>{title}</h2>
            <FontAwesomeIcon onClick={close} icon={faXmark} className="close"/>
            <input ref={inputRef} onChange={handleChange} type="text" value={text}></input>
            <button className={ text ? "submit" : "submit disabled-btn" } 
                    onClick={ text ? addItem : e => { e.preventDefault() } }>Submit</button>
        </form>
    </>);
}

export default Form;