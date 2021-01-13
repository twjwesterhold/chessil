import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BoardEditorPage from "./pages/BoardEditorPage";
import NavBar from "./components/NavBar";

const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/board-editor" component={BoardEditorPage}/>
                <Route path="/" component={HomePage}/>
            </Switch>
        </Router>
    );
};

export default App;
