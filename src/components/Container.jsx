import React, { useEffect, useState } from "react";
import Task from "../classes/Task";
import Form from "./Form";
import Item from "./Item";

function Container(props) {
    const content = props.note ? props.note.content : [];
    const [tasks, setTasks] = useState(content);

    function addTask(task) {
        setTasks([...tasks, task]);
        console.log(props.id);

        props.updateNotes(tasks);
    }

    // Mark a task as completed
    function doneTask(event, taskId) {
        let newTasks = [...tasks];
        newTasks[taskId].done = event.target.checked;

        setTasks([...tasks]);
    }
    
    if (props.id >= 0 && props.id != null) {
        return(<div className="container">
                <h2>{props.note.title}</h2>
                <ul>
                    {tasks.map(item => <Item handleClick={() => {}} doneTask={doneTask} closeNote={() => {}} title={item.text} id={item.id} done={item.done} checkBox={true}></Item>)}
                    <li className="create-btn" onClick={props.showForm} key="#">+ Create new task</li>
                </ul>
                { props.formVisible ? <Form  title="Create new task" hideForm={props.hideForm} onAdd={addTask} class={Task} parentId={props.id}/> : <></> }
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