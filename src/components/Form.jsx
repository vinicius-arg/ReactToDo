import React, { useState } from "react";

function Form({onAdd, Class, parentId}) {
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

    return(<form>
        <input onChange={handleChange} type="text" value={text}></input>
        <button onClick={addItem}>Add</button>
    </form>);
}

export default Form;