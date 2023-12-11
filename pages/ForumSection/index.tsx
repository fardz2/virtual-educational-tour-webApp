import ForumCard from "@/components/ForumCard";
import Link from "next/link";
import React from "react";

const ForumSection = () => {
    return (
        <>
            <div className="px-4 py-6">
                <Link href={`welcome/forum/article/new`} className="w-full flex justify-center items-center text-center py-2.5 border shadow-sm rounded-md bg-white font-medium hover:opacity-90">
                    Add Topics
                </Link>
                <h1 className="mt-6 font-bold text-2xl">Top 10 Article This Month</h1>
                <div className="flex flex-col gap-4 mt-4">
                    <ForumCard />
                    <ForumCard />
                    <ForumCard />
                    <ForumCard />
                    <ForumCard />
                </div>
            </div>
        </>
    );
};

export default ForumSection;
