// AppsPlan component
import React from "react";
import Card from "./card/Card";
import { CardProvider } from "../../../../../context/CardContext";

const AppsPlan = () => {
    return (
        <CardProvider>
            <section className="appsPlan" id="appsPlan">
                <h4>Apps in your Plan</h4>
                <div className="cards">
                    <Card index={0} />
                    <Card index={1} />
                    <Card index={2} />
                </div>
            </section>
        </CardProvider>
    );
};

export default AppsPlan;
