import React from "react";
import { useDispatch } from "react-redux";
import idActions from "../actions/idActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Item({doneTask, delTask, delNote, title, id, done, checkBox, limit}) {
    const dispatch = useDispatch();
    
    // Handle what note container shows by id
    function setId() {
        dispatch(idActions.set(id));
    }

    // Closes the note in container in case of open-deleted
    function closeNote(childId) {
        if (childId === id) dispatch(idActions.set(null));
    }

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
            <li onClick={setId} className="item" key={id}>
                <span>
                    {input}
                    <p className={pClasses}>{limitText(title)}</p>
                </span>
                <FontAwesomeIcon onClick={del} icon={faTrashCan} className="delete" />
            </li>
        );
}

export default Item;