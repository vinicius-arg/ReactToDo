import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Item({handleClick, closeNote, doneTask, title, id, done, checkBox}) {
    const [deleted, setDeleted] = useState(false);

    function del(event) {
        event.stopPropagation();
        setDeleted(true);
        closeNote(id);
    }

    // Styles that depends on "done" property
    const checkmarkClasses = done ? "checkmark checked" : "checkmark";
    const pClasses = done ? "task-completed" : "";

    // Included in case of checkable item
    const input = checkBox ?
        <span className="checkbox-container">
            <input id="checkbox" onChange={event => { doneTask(event, id) }} className="checkbox" type="checkbox" checked={done}></input>
            <label htmlFor="checkbox" className={checkmarkClasses}>{ done ? <FontAwesomeIcon icon={faCheck} className="check-icon" /> : <></> }</label>
        </span> : <></>

    if (!deleted)
        return(
            <li onClick={() => handleClick(id)} className="item" key={id}>
                <span>
                    {input}
                    <p className={pClasses}>{title}</p>
                </span>
                <FontAwesomeIcon onClick={del} icon={faTrashCan} className="delete" />
            </li>
        );
}

export default Item;