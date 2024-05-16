import React, { useEffect, useState, useRef } from "react";
import ScreenProtector from "./ScreenProtector";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Form({title, hideForm, onAdd, Class, parentId}) {
    const [text, setText] = useState('');

    const inputRef = useRef(null);

    // Focus on input when form opens
    useEffect(() => { inputRef.current.focus(); }, []);

    // Changes the state "text" for the input value
    function handleChange(event) {
        let text = event.target.value;
        setText(text);
    }

    // Submits the form
    function addItem(event) {
        event.preventDefault();
        onAdd(new Class(text, parentId));
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