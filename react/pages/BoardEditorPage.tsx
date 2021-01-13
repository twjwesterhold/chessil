import React from "react";
import { Link } from "react-router-dom";

const BoardEditorPage = () => {
    return (
        <div>
            <div>
                This is the board editor page.
            </div>
            <Link to="/">
                Go to home page.
            </Link>
        </div>
    );
};

export default BoardEditorPage;
