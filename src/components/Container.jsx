import React, { useState } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Task from "../classes/Task";
import Item from "./Item";
import Form from "./Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Container({note, id, addTask, doneTask, delTask, switchScreen}) {    
    const [formVisible, setFormVisible] = useState(false);

    function showForm() {
        setFormVisible(true);
    }

    function hideForm() {
        setFormVisible(false);
    }
    
    if (id >= 0 && id != null) {
        return(<div className="container">
                <FontAwesomeIcon onClick={switchScreen} icon={faArrowLeft} className="back" />
                <h2>{note.title}</h2>
                <ul>
                    {note.content.map(item => item ? <Item handleClick={() => {}} doneTask={doneTask} closeNote={() => {}} delTask={delTask} delNote={() => {}} title={item.text} id={item.id} done={item.done} checkBox={true}></Item> : <></>) }
                    <li className="create-btn" onClick={showForm} key="#"><button>+ Create new task</button></li>
                </ul>
                { formVisible ? <Form  title="Create new task" hideForm={hideForm} onAdd={addTask} Class={Task} parentId={id}/> : <></> }
            </div>);
    } else {
        return(
            <div className="container">
                <FontAwesomeIcon onClick={switchScreen} icon={faArrowLeft} className="back" />
                <div className="noNotes">
                    <img src="" alt=""></img>
                    <p>No open notes</p>
                </div>
            </div>
        );
    }
}

export default Container;