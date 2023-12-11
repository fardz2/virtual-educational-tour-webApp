import React from "react";
import virtualTours from "@/libs/dummyTour";
import TourCard from "@/components/TourCard";

const RekomendasiTour = () => {
    const first = ~~(Math.random() * (virtualTours.length - 3) + 1);
    const last = first + 3;
    return (
        <div>
            <h1 className="font-bold text-2xl">Rekomendasi Tour untuk Anda</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {virtualTours.slice(first, last).map((input, index) => (
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
    );
};

export default RekomendasiTour;
