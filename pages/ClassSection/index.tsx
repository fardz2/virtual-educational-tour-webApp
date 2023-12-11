import ClassCard from "@/components/ClassCard";
import React from "react";
import virtualClasses from "@/libs/dummyClass";

const ClassSection = () => {
    return (
        <>
            <div className="">
                <h1 className="font-bold text-2xl mt-6">Classes Section</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 justify-between">
                    {virtualClasses.map((input) => (
                        <ClassCard key={input.id} title={input.title} description={input.description} tag={input.tag.category} image={input.image} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ClassSection;
