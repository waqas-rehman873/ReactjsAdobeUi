import React from "react";
import { FaBell, FaCloud } from "react-icons/fa";
import img from "../../../../assests/pics/photo.avif";
const SocialIcons = () => {
    return (
        <div className="iconBox">
            <FaBell />
            <FaCloud />
            <figure>
                <img src={img} alt="person" />
            </figure>
        </div>
    );
};

export default SocialIcons;
