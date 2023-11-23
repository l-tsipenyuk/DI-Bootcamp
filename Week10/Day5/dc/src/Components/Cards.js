import React, { useState, useEffect } from "react";

const Cards = (props) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const showCards = async () => {
            try {
                const res = await fetch('CardsDB.json');
                const data = await res.json();
                setCards(data.superheroes);
            } catch (e) {
                console.log(e)
            }
        };
        showCards();
    }, []);

    

    return (
        <>
            <div className="header">
                <h1>Superheroes Memory Game</h1>
                <h4>Score: Top Score:</h4>
            </div>
            <h3>Get points by clicking on an image but don't click on them more than once!</h3>
            <div className="container" onClick={""}>
                {cards.map((item) => (
                    <div className="heroCard" key={item.id}>
                        <img src={item.image} alt="Not found" />
                        <h5>{item.name}</h5>
                        <h5>{item.occupation}</h5>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Cards;