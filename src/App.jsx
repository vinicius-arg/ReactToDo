import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoteContainer from "./components/NoteContainer";
import Toolbar from "./components/Toolbar";
import Form from "./components/Form";
import textLimitActions from "./actions/textLimitActions";
import isMobileActions from "./actions/isMobileActions";
import { MOBILE_WINDOW_SIZE } from "./constants";

function App() {
    const id = useSelector(state => state.id);
    const isMobile = useSelector(state => state.isMobile);
    const dispatch = useDispatch();
    
    function handleResize(windowSize) {
        dispatch(textLimitActions.set(windowSize));
        dispatch(isMobileActions.set(windowSize));
        if (windowSize > MOBILE_WINDOW_SIZE &&
            window.location.pathname.includes("/notes")) {
            window.location = "/";
        }
    }

    // Changes textLimit and layout when resizes.
    window.onresize = () => { handleResize(window.innerWidth) };

    if (!isMobile)
        return (
            <main>
                <Router basename="ReactToDo">
                    <Routes>
                        <Route path="/"
                               element={<>
                                  <Toolbar/>
                                  <NoteContainer />
                                </>} />
                        <Route path="/form/:class"
                               element={<Form parentId={id}/>} />
                    </Routes>
                </Router>
            </main>
        );
    else 
        return (
            <main>
                <Router basename="ReactToDo">
                    <Routes>
                        <Route path="/"
                               element={<Toolbar />} />
                        <Route path="/notes/:id"
                               element={<NoteContainer />} />
                        <Route path="/form/:class"
                               element={<Form parentId={id}/>} />
                        <Route path="*"
                               element={<p>This Route doesn't exist.</p>} />
                    </Routes>
                </Router>
            </main>
        );
}

export default App;