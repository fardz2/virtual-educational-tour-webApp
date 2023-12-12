"use client";

import React from "react";
import Badge from "../Badges";
import Link from "next/link";
import Image from "next/image";
import FavoritButton from "../FavoritButton";

interface TourData {
    id: number;
    title: string;
    description: string;
    tag: string;
    image: string;
}

const TourCard = (props: TourData) => {
    const tourPathName = "/welcome/tour/";
    const handleAddToFavorites = (contentId: number) => {
        // Implementasikan penyimpanan ke daftar favorit di sini
        console.log(`Content with ID ${contentId} added to favorites!`);
    };

    return (
        <>
            <Link
                href={`${tourPathName}${props.id}`}
                className="p-4 w-[240px] relative"
            >
                {/* <FavoritButton contentId={id} onAddToFavorites={handleAddToFavorites} /> */}
                <div className="w-60 h-60  rounded-lg">
                    <Image
                        src={props.image}
                        width={400}
                        height={400}
                        alt="placehold"
                    />
                </div>
                <div className="mt-4 flex flex-col gap-2">
                    <h1 className="text-2xl font-bold max-w-[240px]">
                        {props.title}
                    </h1>
                    <div className="flex flex-row gap-1">
                        <Badge href="" text={props.tag} type="" />
                        <Badge href="" text="tag2" type="" />
                    </div>
                    <h2 className="max-w-[240px] truncate">
                        {props.description}
                    </h2>
                </div>
            </Link>
        </>
    );
};

export default TourCard;
