import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <div>
                This is the home page.
            </div>
            <Link to="/board-editor">
                Go to board editor.
            </Link>
        </div>
    );
};

export default HomePage;