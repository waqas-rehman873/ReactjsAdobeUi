import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
    return (
        <ul className="">
            <li>
                <NavLink to="/apps" className={({ isActive }) => (isActive ? "active-link" : "")}>
                    Apps
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/yourwork"
                    className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                    Your work
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/discover"
                    className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                    Discover
                </NavLink>
            </li>
            <li>
                <NavLink to="/market" className={({ isActive }) => (isActive ? "active-link" : "")}>
                    Market
                </NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;
