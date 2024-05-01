import React from "react";
import Task from "../classes/Task";
import Item from "./Item";
import Form from "./Form";

function Container({note, id, addTask, doneTask}) {    
    function add() {
        console.log('new task');
    }
    
    if (id >= 0 && id != null) {
        return(<div className="container">
                <h2>{note.title}</h2>
                <ul>
                    {note.content.map(item => <Item handleClick={() => {}} doneTask={doneTask} title={item.text} id={item.id} done={item.done} checkBox={true}></Item>)}
                    <li onClick={add} key="#">+ Create new task</li>
                </ul>
                <Form  title="Create new task" onAdd={addTask} Class={Task} parentId={id}></Form>
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