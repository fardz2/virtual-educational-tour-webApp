import TourCard from "@/components/TourCard";
import React from "react";
import virtualTours from "@/libs/dummyTour";
const TourSection = () => {
    return (
        <>
            <div>
                <h1 className="px-4 font-bold text-2xl mt-6">Tour Section</h1>
                <div className="flex flex-wrap gap-6 pb-6 justify-between">
                    {virtualTours.map((input, index) => (
                        <TourCard
                            id={input.id}
                            key={index}
                            title={input.title}
                            description={input.description}
                            image={input.image}
                            tag={input.tag.category}
                        />
                    ))}
                </div>
                
            </div>
        </>
    );
};

export default TourSection;
