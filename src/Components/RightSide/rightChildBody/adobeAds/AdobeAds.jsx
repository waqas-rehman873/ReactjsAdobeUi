import { SiAdobephotoshop } from "react-icons/si";
import glass from "../../../../assests/pics/glass.png";

const AdobeAds = () => {
    return (
        <div className="adobeAds">
            <card className="adobe">
                <h3>
                    <SiAdobephotoshop />
                    Adobe Stock
                </h3>
                <p>
                    Grab yourself 10 free images from Adobe Stock in a 30-day free trial plan and
                    find perfect image, that will help you with your new project.
                </p>
                <button className="freeTrial">Start Free trial</button>
            </card>
            <figure>
                <img src={glass} alt="adobe" />
            </figure>
        </div>
    );
};

export default AdobeAds;
