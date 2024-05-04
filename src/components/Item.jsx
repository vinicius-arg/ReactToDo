import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

function Item(props) {
    const [deleted, setDeleted] = useState(false);

    function del(event) {
        event.stopPropagation();
        setDeleted(true);
        props.closeNote(props.id);
    }

    // Included in case of checkable item
    const input = props.checkBox ?
        <span className="checkbox-container">
            <input onChange={event => { props.doneTask(event, props.id) }} className="checkbox" type="checkbox" checked={props.done}></input>
            <span className="checkmark"></span>
        </span> : <></>

    if (!deleted)
        return(
            <li onClick={() => props.handleClick(props.id)} className="item" key={props.id}> 
                <span>
                    {input}
                    <p className={ props.done ? "task-completed" : "" }>{props.title}</p>
                </span>
                <FontAwesomeIcon onClick={del} icon={faTrashCan} className="delete" />
            </li>
        );
}

export default Item;