import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ScreenProtector from "./ScreenProtector";

function Form(props) {
    const [text, setText] = useState('');

    // Changes the state text for the input value
    function handleChange(event) {
        let text = event.target.value;
        setText(text);
    }

    // Submits the form
    function addItem(event) {
        event.preventDefault();
        props.onAdd(new props.class(text, props.parentId));
        setText('');
        props.hideForm();
    }

    function close() {
        props.hideForm();
    }

    return(<>
        <ScreenProtector/>
        <form className="form">
            <h2>{props.title}</h2>
            <FontAwesomeIcon onClick={close} icon={faXmark} className="close"/>
            <input onChange={handleChange} type="text" value={text}></input>
            <button className="submit" onClick={addItem}>Submit</button>
        </form>
    </>);
}

export default Form;