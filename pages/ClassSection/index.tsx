import ClassCard from "@/components/ClassCard";
import React from "react";
import virtualClasses from "@/libs/dummyClass";

const ClassSection = () => {
    return (
        <>
            <div>
                <h1 className="font-bold text-2xl mt-6">Classes Section</h1>
                <div className="flex flex-wrap gap-6 py-6 justify-between">
                    {virtualClasses.map((input) => (
                        <ClassCard key={input.id} title={input.title} description={input.description} tag={input.tag} image={input.image} />
                    ))}
                </div>
                <button className="py-2.5 w-full text-center font-medium bg-neutral-900 text-white rounded-lg">
                    Load more...
                </button>
            </div>
        </>
    );
};

export default ClassSection;
