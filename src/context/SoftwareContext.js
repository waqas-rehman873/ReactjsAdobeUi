import React, { createContext, useContext, useState } from "react";
import pr from "../assests/pics/pr.png";
import id from "../assests/pics/id.png";
import ae from "../assests/pics/ae.png";

const SoftwareContext = createContext();

export const useSoftwareContext = () => {
    const context = useContext(SoftwareContext);
    if (!context) {
        throw new Error("useSoftwareContext must be used within a SoftwareProvider");
    }
    return context;
};

export const SoftwareProvider = ({ children }) => {
    const [softwareData, setSoftwareData] = useState([
        {
            name: "PhotoShop",
            status: "Updated",
            options: ["Go to Discover", "Learn More", "Uninstall"],
            imgUrl: pr,
        },
        {
            name: "InDesign",
            status: "Update available",
            options: ["Go to Discover", "Learn More", "Uninstall"],
            imgUrl: id,
        },
        {
            name: "After Effects",
            status: "Updated",
            options: ["Go to Discover", "Learn More", "Uninstall"],
            imgUrl: ae,
        },
    ]);

    return (
        <SoftwareContext.Provider value={{ softwareData, setSoftwareData }}>
            {children}
        </SoftwareContext.Provider>
    );
};

export default SoftwareContext;
