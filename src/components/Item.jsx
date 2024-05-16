import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Item({handleClick, closeNote, doneTask, delTask, delNote, title, id, done, checkBox, limit}) {
    function del(event) {
        event.stopPropagation();
        delNote(id);
        delTask(id);
        closeNote(id);
    }

    function limitText(text) {
        if (limit && text.length > limit)
            return (text.slice(0, limit) + "...");
        else return text; 
    }

    // Styles that depends on "done" property
    const checkmarkClasses = done ? "checkmark checked" : "checkmark";
    const pClasses = done ? "task-completed" : "";

    // Included in case of checkable item
    const input = checkBox ?
        <span className="checkbox-container">
            <input id={`task-${id}`} onChange={event => { doneTask(event, id) }} className="checkbox" type="checkbox" checked={done}></input>
            <label htmlFor={`task-${id}`} 
                   className={checkmarkClasses}>
                   { done ? <FontAwesomeIcon icon={faCheck} className="check-icon" /> : <></> }
            </label>
        </span> : <></>
        
        return(
            <li onClick={() => handleClick(id)} className="item" key={id}>
                <span>
                    {input}
                    <p className={pClasses}>{limitText(title)}</p>
                </span>
                <FontAwesomeIcon onClick={del} icon={faTrashCan} className="delete" />
            </li>
        );
}

export default Item;