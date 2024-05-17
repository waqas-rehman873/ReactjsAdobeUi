import React from "react";
import { SiAdobeindesign } from "react-icons/si";
import "../adobeAds/adobe.scss";
import glass from "../../../../../assests/pics/glass.png";
const AdobeInDesign = () => {
    return (
        <main className="rightChildBody">
            <section className="adobeAds" id="graphic-design">
                <card className="adobe">
                    <h3>
                        <SiAdobeindesign />
                        Indesign Stock
                    </h3>
                    <p>
                        Grab yourself 10 free images from Adobe Stock in a 30-day free trial plan
                        and find perfect image, that will help you with your new project.
                    </p>
                    <button className="freeTrial">Start Free trial</button>
                </card>
                <figure>
                    <img src={glass} alt="adobe" />
                </figure>
            </section>
        </main>
    );
};

export default AdobeInDesign;
