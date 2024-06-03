import React, { useState } from "react";
import { useSelector } from "react-redux";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Task from "../classes/Task";
import Item from "./Item";
import Form from "./Form";

function Container({switchScreen}) {
    const id = useSelector(state => state.id);
    const note = useSelector(state => state.note);

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
                <h2>{note[id]?.title}</h2>
                <ul>
                    { note[id]?.content.map(task => task ? <Item key={task.id} id={task.id} title={task.text} done={task.done} taskItem={true}></Item> : <></>) }
                    <li className="create-btn" onClick={showForm}><button>+ Create new task</button></li>
                </ul>
                { formVisible ? <Form  title="Create new task" hideForm={hideForm} Class={Task} parentId={id}/> : <></> }
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