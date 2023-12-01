import ForumCard from "@/components/ForumCard";
import React from "react";

const ForumSection = () => {
    return (
        <>
            <div className="pl-4 py-6">
                <button className="w-full text-center py-2.5 border shadow-sm rounded-lg bg-white font-medium hover:opacity-90">Add Topics</button>
                <div className="flex flex-col gap-4 mt-4">
                    <ForumCard/>
                    <ForumCard/>
                    <ForumCard/>
                    <ForumCard/>
                    <ForumCard/>
                </div>
            </div>
        </>
    );
};

export default ForumSection;
