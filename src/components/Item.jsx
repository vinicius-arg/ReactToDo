import React, { useState } from "react";

function Item({handleClick, closeNote, doneTask, title, id, done, checkBox}) {
    const [deleted, setDeleted] = useState(false);

    function del(event) {
        event.stopPropagation();
        setDeleted(true);
        closeNote(id);
    }

    // Included in case of checkable item
    const input = checkBox ?
        <span className="checkbox-container">
            <input onChange={event => { doneTask(event, id) }} className="checkbox" type="checkbox" checked={done}></input>
            <span className="checkmark"></span>
        </span> : <></>

    if (!deleted)
        return(
            <li onClick={() => handleClick(id)} className="item" key={id}>
                <span>
                    {input}
                    <p className={ done ? "task-completed" : "" }>{title}</p>
                </span>
                <span onClick={del} className="delete">X</span>
            </li>
        );
}

export default Item;