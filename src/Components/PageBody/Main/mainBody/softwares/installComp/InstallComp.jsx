import React, { useState } from "react";
import { useSoftwareContext } from "../../../../../../context/SoftwareContext";

const InstallComp = ({ index }) => {
    const { softwareData } = useSoftwareContext();
    const software = softwareData[index];
    const [dropdown, setDropdown] = useState(false);
    return (
        <li>
            <span>
                <figure>
                    <img src={software.imgUrl} alt="Logo" /> {software.name}
                </figure>{" "}
            </span>
            <span className="status">
                <span className="circle"></span> {software.status}
            </span>
            <span>
                <button className={`appBtn ${software.status === "Updated" ? "open" : "update"}`}>
                    {software.status === "Updated" ? "Open" : "Update"}
                </button>
                <div className="customIcon">
                    <button
                        onClick={() => {
                            setDropdown((prev) => !prev);
                        }}
                    >
                        {" "}
                        {dropdown && (
                            <>
                                <div className="dropdownmenu">
                                    <ul>
                                        <li>Go to Discover</li>
                                        <li>Learn More</li>
                                        <li>Uninstall</li>
                                    </ul>
                                </div>
                            </>
                        )}
                    </button>
                </div>
            </span>
        </li>
    );
};

export default InstallComp;
