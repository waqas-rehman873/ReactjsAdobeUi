import React from "react";
import LinkComponent from "./child/LinkComponent";

const LeftCategories = ({ links }) => {
    return (
        <>
            {links.map(({ to, icon, text }) => (
                <LinkComponent key={to} to={to} icon={icon} text={text} />
            ))}
        </>
    );
};

export default LeftCategories;
