import React from "react";
import AdobeAds from "./adobeAds/AdobeAds";
import Softwares from "./softwares/Softwares";
import AppsPlan from "./appsPlan/AppsPlan";

const MainBody = () => {
    return (
        <section className="rightChildBody">
            <AdobeAds />
            <Softwares />
            <AppsPlan />
        </section>
    );
};

export default MainBody;
