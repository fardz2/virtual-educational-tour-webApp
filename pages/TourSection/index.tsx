import TourCard from "@/components/TourCard";
import React from "react";
import virtualTours from "@/libs/dummyTour";
const TourSection = () => {
    

    return (
        <>
            <div>
                <h1 className="font-bold text-2xl mt-6">Tour Section</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 justify-between">
                    {virtualTours.slice(0, 5).map((input, index) => (
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
