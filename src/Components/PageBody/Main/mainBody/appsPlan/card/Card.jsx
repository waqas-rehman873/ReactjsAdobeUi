import React from "react";
import { useCardContext } from "../../../../../../context/CardContext";

const Card = ({ index }) => {
    const { cardsData } = useCardContext();
    const cardData = cardsData[index];

    return (
        <article className="cardBox">
            <header className="cardHeader">
                {cardData.iconUrl && (
                    <figure>
                        <img
                            src={cardData.iconUrl}
                            alt="Icon"
                            style={{ width: "24px", height: "24px" }}
                        />
                    </figure>
                )}
                {cardData.title}
            </header>
            <div className="cardBody">{cardData.description}</div>
            <footer className="cardFooter">
                <button className="btnUpdate">{cardData.buttonText}</button>
                <span className="menu"></span>
            </footer>
        </article>
    );
};

export default Card;
