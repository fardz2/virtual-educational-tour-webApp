import React from "react";
import Badge from "../Badges";
import Link from "next/link";
import Image from "next/image";

const TourCard = () => {
    const tourPathName = "/welcome/tour/";
    const id = Math.floor(Math.random() * 100) + 1;
    return (
        <>
            <Link href={`${tourPathName}/${id}`} className="p-4 max-w-min">
                <div className="w-60 h-60  rounded-lg">
                    <Image
                        src={`https://placehold.co/400x400/png`}
                        width={400}
                        height={400}
                        alt="placehold"
                    />
                </div>
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
            </Link>
        </>
    );
};

export default TourCard;
