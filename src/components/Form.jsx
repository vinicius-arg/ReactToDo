import React, { useState } from "react";

function Form({title, onAdd, Class, parentId}) {
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
    }

    return(<form className="form">
        <h2>{title}</h2>
        <span className="close">X</span>
        <input onChange={handleChange} type="text" value={text}></input>
        <button className="submit" onClick={addItem}>Submit</button>
    </form>);
}

export default Form;