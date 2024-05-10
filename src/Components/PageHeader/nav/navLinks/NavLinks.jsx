import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
    return (
        <ul className="">
            <li>
                <Link to="./apps">Apps</Link>
            </li>
            <li>
                <Link to="./your-work">Your work</Link>
            </li>{" "}
            <li>
                <Link to="./discover">Discover</Link>
            </li>{" "}
            <li>
                <Link to="./market">Market</Link>
            </li>{" "}
        </ul>
    );
};

export default NavLinks;
