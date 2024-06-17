import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Item from "./Item";

function Container() {
    const params = useParams();
    const id = useSelector(state => params?.id || state.id);
    const note = useSelector(state => state.note);
    const isMobile = useSelector(state => state.isMobile);

    if (id >= 0 && id != null) {
        return(<div className="container">
                { isMobile 
                    ? <Link to="/"><FontAwesomeIcon icon={faArrowLeft} className="back" /></Link> 
                    : <></> 
                }
                <h2>{note[id]?.title}</h2>
                <ul>
                    { note[id]?.content.map(task => task ? <Item key={task.id} id={task.id} title={task.text} done={task.done} taskItem={true}></Item> : <></>) }
                    <Link to="/form/task">
                        <li className="create-btn"><button>+ Create new task</button></li>
                    </Link>
                </ul>
            </div>);
    } else {
        return(
            <div className="container">
                { isMobile 
                    ? <Link to="/"><FontAwesomeIcon icon={faArrowLeft} className="back" /></Link> 
                    : <></> 
                }
                <div className="noNotes">
                    <img src="" alt=""></img>
                    <p>No open notes</p>
                </div>
            </div>
        );
    }
}

export default Container;