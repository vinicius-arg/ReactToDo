import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from "./Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import idActions from "../actions/idActions";
import noteActions from "../actions/noteActions";
import taskActions from "../actions/taskActions";
import Task from "../classes/Task";

function Item({id, title, done, taskItem}) {
    const noteId = useSelector(state => state.id);
    const textLimit = useSelector(state => state.textLimit);
    const dispatch = useDispatch();
    
    // Handle what note container shows by id
    function setId() {
        if (!taskItem) dispatch(idActions.set(id));
    }

    // Closes the note in container in case of open-deleted
    function closeNote(noteId) {
        if (noteId === id) dispatch(idActions.set(null));
    }

    function delNote(id) {
        dispatch(noteActions.delete(id));
        Task.nextTaskIds[noteId] = null;
        closeNote(noteId);
    }

    function delTask(taskId) {
        dispatch(taskActions.delete(noteId, taskId));
    }

    // Delete an item, work for both notes or tasks.
    function del(event) {
        event.stopPropagation();
        
        if (taskItem) delTask(id);
        else delNote(id);
    }

    function limitText(text) {
        if (textLimit && text.length > textLimit)
            return (text.slice(0, textLimit) + "...");
        else return text; 
    }

    // Styles that depends on "done" property
    const pClasses = done ? "task-completed" : "";

    // Included in case of checkable item
    const input = taskItem ? <Checkbox id={id} done={done} /> : <></>
        
    return(<li onClick={setId} className="item">
            <span>
                {input}
                <p className={pClasses}>{limitText(title)}</p>
            </span>
            <FontAwesomeIcon onClick={del} icon={faTrashCan} className="delete" />
        </li>
    );
}

export default Item;