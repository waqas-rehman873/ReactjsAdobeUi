import React from "react";
import { Link } from "react-router-dom";

const RightChildHeader = () => {
    return (
        <header className="sectionHeader">
            <nav>
                <Link to="desktop">Desktop</Link>
                <Link to="web">Web</Link>
                <Link to="mobile">Mobile</Link>
            </nav>
        </header>
    );
};

export default RightChildHeader;
