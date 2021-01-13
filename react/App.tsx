import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BoardEditorPage from "./pages/BoardEditorPage";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/second-page" component={BoardEditorPage}/>
                <Route path="/" component={HomePage}/>
            </Switch>
        </Router>
    );
};

export default App;
