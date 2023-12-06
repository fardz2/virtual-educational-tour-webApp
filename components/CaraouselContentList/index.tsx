"use client"

import React, { useEffect, useState } from "react";
import TourCard from "../TourCard";

const CarouselContentList = () => {
    const [cards, setCards] = useState<React.ReactElement[]>([]);
    const [current, setCurrent] = useState(0);
    const [slideDirection, setSlideDirection] = useState<
        "right" | "left" | undefined
    >("left");

    const cardsPerPage = 4;
    const duplicateCards: React.ReactElement[] = Array.from(
        { length: 10 },
        (_, i) => <TourCard key={i} />,
    );

    const handleNext = () => {
        setSlideDirection("left");
        setCurrent((prevPage) => prevPage + 1);
    };

    const handlePrev = () => {
        setSlideDirection("right");
        setCurrent((prevPage) => prevPage - 1);
    };

    useEffect(() => {
        setCards(duplicateCards);
    }, []);

    return (
        <div className="flex flex-row items-center justify-center h-[400px]">
            <button onClick={handlePrev}>prev</button>
            <div className="flex flex-row items-center justify-center h-[400px]">
                {cards.map((card, index) => (
                    <div
                        className={`w-full h-full ${
                            current === index ? "block" : "hidden"
                        }`}
                        key={index}
                    >
                        <TourCard />
                    </div>
                ))}
            </div>
            <button onClick={handleNext}>next</button>
        </div>
    );
};

export default CarouselContentList;
