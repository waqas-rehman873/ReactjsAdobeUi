import React from "react";
import { useSoftwareContext } from "../../../../../../context/SoftwareContext";

const InstallComp = ({ index }) => {
    const { softwareData } = useSoftwareContext();
    const software = softwareData[index];

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
                    <div className="dropdown">
                        <select>
                            {software.options.map((option, idx) => (
                                <option key={idx} value={`option${idx + 1}`}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </span>
        </li>
    );
};

export default InstallComp;
