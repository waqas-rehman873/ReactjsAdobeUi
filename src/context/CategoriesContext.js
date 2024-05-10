import React, { createContext, useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { SiTaichigraphics } from "react-icons/si";
import { IoIosReverseCamera } from "react-icons/io";
import { IoBrush } from "react-icons/io5";
import { IoChatbubblesOutline } from "react-icons/io5";
import { RiGroupFill } from "react-icons/ri";
import { PiGraduationCapFill } from "react-icons/pi";
import { FaBehanceSquare } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
const CategoriesContext = createContext();

export const useCategoriesContext = () => useContext(CategoriesContext);

export const CategoriesProvider = ({ children }) => {
    const [categoriesData, setCategoriesData] = useState([
        {
            category: "Apps",
            links: [
                { to: "all-apps", icon: <FaBars size={16} />, text: "All apps" },
                { to: "all-updates", icon: <RxUpdate size={16} />, text: "All Updates" },
            ],
        },
        {
            category: "Categories",
            links: [
                { to: "photography", icon: <IoIosReverseCamera size={16} />, text: "Photography" },
                {
                    to: "graphics-design",
                    icon: <SiTaichigraphics size={16} />,
                    text: "Graphics Design",
                },
                { to: "video", icon: <MdOutlineVideoLibrary size={16} />, text: "Video" },
                { to: "illustrations", icon: <IoBrush size={16} />, text: "Illustrations" },
                { to: "UI/UX", icon: <MdOutlineVideoLibrary size={16} />, text: "UI/UX" },
                { to: "3D/AR", icon: <MdOutlineVideoLibrary size={16} />, text: "3D/AR" },
            ],
        },
        {
            category: "Fonts",
            links: [{ to: "manage-fonts", icon: <FiBox size={16} />, text: "Manage Fonts" }],
        },
        {
            category: "Resources Links",
            links: [
                { to: "tutorials", icon: <PiGraduationCapFill size={16} />, text: "Tutorials" },
                { to: "portfolio", icon: <RiGroupFill size={16} />, text: "Portfolio" },
                { to: "behance", icon: <FaBehanceSquare size={16} />, text: "Behance" },
                {
                    to: "social-forum",
                    icon: <IoChatbubblesOutline size={16} />,
                    text: "Social Forum",
                },
            ],
        },
    ]);

    return (
        <CategoriesContext.Provider value={{ categoriesData, setCategoriesData }}>
            {children}
        </CategoriesContext.Provider>
    );
};
