import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import taskActions from "../actions/taskActions";

function Checkbox({id, done}) {
    const noteId = useSelector(state => state.id);
    const dispatch = useDispatch();

    // Mark a task as completed
    function doneTask(event, noteId, taskId) {
        dispatch(taskActions.done(event.target.checked, noteId, taskId));
    }

    // Styles that depends on "done" property
    const checkmarkClasses = done ? "checkmark checked" : "checkmark";

    return (<span className="checkbox-container">
            <input id={`task-${id}`} onChange={event => { doneTask(event, noteId, id) }} className="checkbox" type="checkbox" checked={done}></input>
            <label htmlFor={`task-${id}`} className={checkmarkClasses}>
                { done ? <FontAwesomeIcon icon={faCheck} className="check-icon" /> : <></> }
            </label>
        </span>);
}

export default Checkbox;