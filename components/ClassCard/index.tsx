import React from "react";
import Badge from "../Badges";

const ClassCard = () => {
    return (
        <>
            <div className="max-w-min border rounded-lg">
                <div className="w-72 h-60 bg-white rounded-t-lg"></div>
                <div className="flex flex-col gap-2 p-4">
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

export default ClassCard;
