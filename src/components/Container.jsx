import React, { useState } from "react";
import Task from "../classes/Task";
import Item from "./Item";
import Form from "./Form";

function Container({note, id, addTask, doneTask, delTask}) {    
    const [formVisible, setFormVisible] = useState(false);

    function showForm() {
        setFormVisible(true);
    }

    function hideForm() {
        setFormVisible(false);
    }
    
    if (id >= 0 && id != null) {
        return(<div className="container">
                <h2>{note.title}</h2>
                <ul>
                    {note.content.map(item => <Item handleClick={() => {}} doneTask={doneTask} closeNote={() => {}} delTask={delTask} title={item.text} id={item.id} done={item.done} checkBox={true}></Item>)}
                    <li className="create-btn" onClick={showForm} key="#"><button>+ Create new task</button></li>
                </ul>
                { formVisible ? <Form  title="Create new task" hideForm={hideForm} onAdd={addTask} Class={Task} parentId={id}/> : <></> }
            </div>);
    } else {
        return(
            <div className="container">
                <div className="noNotes">
                    <img src="" alt=""></img>
                    <p>No open notes</p>
                </div>
            </div>
        );
    }
}

export default Container;