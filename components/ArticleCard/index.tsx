"use client";

import Image from "next/image";
import React from "react";

const ArticleCard = () => {
    return (
        <div className="grid grid-cols-4">
            <div className="col-span-3 flex flex-col gap-2 mr-4">
                <div className="flex flex-row items-center gap-1">
                    <div className="bg-blue-500 h-5 w-5 rounded-full"></div>
                    <h2 className="text-sm">Username</h2>
                </div>
                <h1 className="text-lg font-bold">Title</h1>
                <p>description</p>
                <div className="flex flex-row justify-between">
                    <span className="flex flex-row gap-2">
                        <h3 className="text-sm text-gray-600">createdAt</h3>
                        <p className="text-sm text-gray-600">tag</p>
                    </span>
                    <button onClick={() => alert("Article Saved")}>
                        Add Favorit
                    </button>
                </div>
            </div>
            <div className="col-span-1 bg-bluePrim"></div>
        </div>
    );
};

export default ArticleCard;
