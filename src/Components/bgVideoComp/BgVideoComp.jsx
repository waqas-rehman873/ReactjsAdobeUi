import React from "react";

const BgVideoComp = () => {
    return (
        <figure>
            {" "}
            <video autoPlay muted loop id="videoBackground">
                <source className="videoBackground" src="/bg.mp4" type="video/mp4" />
            </video>
        </figure>
    );
};

export default BgVideoComp;
