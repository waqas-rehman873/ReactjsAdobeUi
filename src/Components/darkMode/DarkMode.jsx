import React, { useState } from "react";
import { IoMoon } from "react-icons/io5";

const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark-mode", isDarkMode);
    };

    return (
        <div className="darkMode" onClick={toggleDarkMode}>
            <IoMoon />
        </div>
    );
};

export default DarkMode;
