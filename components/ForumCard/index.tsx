import React from "react";
import Badge from "../Badges";
import Link from "next/link";

const ForumCard = () => {
    const forumPathName = "/welcome/forum";
    const id = Math.floor(Math.random() * 100) + 1;
    return (
        <>
            <Link
                href={`${forumPathName}/${id}`}
                className="flex flex-col gap-4 border rounded-lg shadow-md p-4 bg-white"
            >
                <div className="flex flex-col gap-1">
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

                <div className="grid grid-cols-3 items-center">
                    <p className="text-sm col-span-1 text-gray-600">
                        25 komentar
                    </p>
                    <div className="flex flex-row gap-1 col-span-2 justify-end items-center">
                        <input
                            type="text"
                            placeholder="Add Comment..."
                            className="w-full rounded-md border-gray-200 py-2 pe-10 shadow-sm sm:text-sm px-4 border"
                        />
                        <button className="border w-10 h-10 rounded-md"></button>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default ForumCard;
