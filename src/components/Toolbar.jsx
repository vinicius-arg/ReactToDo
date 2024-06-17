import React from "react";
import Title from "./Title";
import Navbar from "./Navbar";

function Toolbar() {
    return(
        <aside className="toolbar">
            <Title title="Your Tasks" />
            <Navbar />
        </aside>
    );
}

export default Toolbar;