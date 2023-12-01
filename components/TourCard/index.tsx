import React from "react";
import Badge from "../Badges";

const TourCard = () => {
    return (
        <>
            <div className="p-4 max-w-min">
                <div className="w-60 h-60 bg-white rounded-lg"></div>
                <div className="mt-4 flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">Title</h1>
                    <div className="flex flex-row gap-1">
                        <Badge href="" text="tag1" type="" />
                        <Badge href="" text="tag2" type="" />
                    </div>
                    <h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam, quo!
                    </h2>
                </div>
            </div>
        </>
    );
};

export default TourCard;
