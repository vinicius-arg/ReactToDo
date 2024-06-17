import React, { useEffect, useState, useRef } from "react";
import ScreenProtector from "./ScreenProtector";
import { Link, useParams, useNavigate, useHref } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import noteActions from "../actions/noteActions";
import taskActions from "../actions/taskActions";
import Note from "../classes/Note";
import Task from "../classes/Task";

function Form({parentId}) {
    const params = useParams();
    const isMobile = useSelector(state => state.isMobile);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        const objClass = params.class;

        if (objClass === "note") 
            addNote(new Note(text));
        else if (objClass === "task") 
            addTask(new Task(text, parentId));
        else 
            throw console.error("Exception: Invalid class.");

        setText('');

        const originPath = (objClass === "task" && isMobile) ? (`/notes/${parentId}`) : ("/");
        navigate(originPath);
    }

    return(<>
        <ScreenProtector/>
        <form className="form">
            <h2>{`Create new ${params.class}`}</h2>
            <Link to="/">
                <FontAwesomeIcon icon={faXmark}
                                 className="close"/>
            </Link>
            <input ref={inputRef} 
                   onChange={handleChange} 
                   type="text" 
                   value={text}>         
            </input>
            <button className={ text ? "submit" : "submit disabled-btn" } 
                    disabled={!text}
                    onClick={addItem}>
                    Submit
            </button>
        </form>
    </>);
}

export default Form;