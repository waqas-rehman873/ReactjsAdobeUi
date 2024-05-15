import React from "react";
import { SoftwareProvider } from "../../../../context/SoftwareContext";
import InstallComp from "./installComp/InstallComp";

const Softwares = () => {
    return (
        <SoftwareProvider>
            <div className="softwares" id="all-updates">
                <h4>Installed</h4>
                <ul>
                    <InstallComp index={0} />
                    <InstallComp index={1} />
                    <InstallComp index={2} />
                </ul>
            </div>
        </SoftwareProvider>
    );
};

export default Softwares;
