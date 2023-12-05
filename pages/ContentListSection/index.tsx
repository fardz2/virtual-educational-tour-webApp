import CaraouselContentList from "@/components/CaraouselContentList";
import TourContentCard from "@/components/TourContentCard";
import React from "react";

const ContentListSection = () => {
    return (
        <>
            <div className="flex flex-col pt-12 bg-gradient-to-b min-h-screen from-blue-50 from-10% to-blue-500">
                <h1 className="text-center font-bold text-5xl">
                    Content List Section
                </h1>
                {/* <div className="flex flex-row gap-6 mt-12 justify-center items-center">
                    <div className="text-7xl font-bold">{"<"}</div>
                    <TourContentCard
                        title={`Judul dari educational tour`}
                        desc="lorem ipsum dolor si amaet"
                        href="/"
                    />

                    <TourContentCard
                        title={`Judul dari educational tour`}
                        desc="lorem ipsum dolor si amaet"
                        href="/"
                    />
                    <TourContentCard
                        title={`Judul dari educational tour`}
                        desc="lorem ipsum dolor si amaet"
                        href="/"
                    />
                    <div className="text-7xl font-bold">{">"}</div>
                </div> */}
                <CaraouselContentList />
            </div>
        </>
    );
};

export default ContentListSection;
