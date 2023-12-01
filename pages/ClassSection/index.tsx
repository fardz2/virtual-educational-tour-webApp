import ClassCard from "@/components/ClassCard";
import React from "react";

const ClassSection = () => {
    return (
        <>
            <div>
                <h1 className="font-bold text-2xl mt-6">Classes Section</h1>
                <div className="flex flex-wrap gap-6 py-6 justify-between">
                    <ClassCard />
                    <ClassCard />
                    <ClassCard />
                    <ClassCard />
                </div>
                <button className="py-2.5 w-full text-center font-medium bg-neutral-900 text-white rounded-lg">
                    Load more...
                </button>
            </div>
        </>
    );
};

export default ClassSection;
