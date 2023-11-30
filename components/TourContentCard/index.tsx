import React from "react";
import Link from "next/link";
import Badge from "../Badges";
import Button from "../Button";

interface TourCardProps {
    href: string;
    title: string;
    desc: string;
}

const TourContentCard = (props: TourCardProps) => {
    return (
        <>
            <Link href={props.href}>
                <div className="w-min flex flex-col p-6 gap-4 rounded-lg bg-white">
                    <div className="w-80 h-64 bg-slate-400 rounded-lg"></div>
                    <div className="flex gap-2">
                        <Badge
                            href="/Education"
                            type="category"
                            text="Science"
                        />
                        <Badge
                            href="/Laboratory"
                            type="type"
                            text="Laboratory"
                        />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold">
                            {props.title}
                        </h1>
                        <p>{props.desc}</p>
                    </div>
                    <Button href="/" text="On The Way to Tour!" primary />
                </div>
            </Link>
        </>
    );
};

export default TourContentCard;
