import React, { createContext, useContext, useState } from "react";
import pr from "../assests/pics/pr.png";
import id from "../assests/pics/id.png";
import ae from "../assests/pics/ae.png";

const CardContext = createContext();

export const useCardContext = () => {
    const context = useContext(CardContext);
    if (!context) {
        throw new Error("useCardContext must be used within a CardProvider");
    }
    return context;
};

export const CardProvider = ({ children }) => {
    const [cardsData, setCardsData] = useState([
        {
            title: "Premiere Pro",
            description: "Edit, master and create fully professional videos",
            buttonText: "Update",
            iconUrl: pr,
        },
        {
            title: "InDesign",
            description: "Design and publish great projects & mockups",
            buttonText: "Upgrade",
            iconUrl: id,
        },
        {
            title: "After Effects",
            description: "Create incredible motion graphics and visual effects",
            buttonText: "Upgrade",
            iconUrl: ae,
        },
    ]);

    return (
        <CardContext.Provider value={{ cardsData, setCardsData }}>{children}</CardContext.Provider>
    );
};

export default CardContext;
