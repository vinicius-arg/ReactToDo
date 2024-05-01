import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ScreenProtector from "./ScreenProtector";

function Form({title, hideForm, onAdd, Class, parentId}) {
    const [text, setText] = useState('');

    // Changes the state text for the input value
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
            <input onChange={handleChange} type="text" value={text}></input>
            <button className="submit" onClick={addItem}>Submit</button>
        </form>
    </>);
}

export default Form;