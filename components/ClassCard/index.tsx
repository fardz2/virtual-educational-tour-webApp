import React from "react";
import Badge from "../Badges";
import Link from "next/link";
import Image from "next/image";

interface VirtualClassData {
    title: string;
    description: string;
    tag: string;
    image: string;
}

const ClassCard = (props: VirtualClassData) => {
    const classPathName = "/welcome/class";
    const id = Math.floor(Math.random() * 100) + 1;
    return (
        <>
            <Link
                href={`${classPathName}/${id}`}
                className="max-w-min border border-gray-100 rounded-lg"
            >
                <div className="w-72 h-60 bg-gray-100 rounded-t-lg">
                    <Image src={props.image} width={100} height={100} alt="" />
                </div>
                <div className="flex flex-col gap-2 p-4">
                    <h1 className="text-2xl font-bold">{props.title}</h1>
                    <div className="flex flex-row gap-1">
                        <Badge href="" text={props.tag} type="" />
                        <Badge href="" text={props.tag} type="" />
                    </div>
                    <h2 className="max-w-[240px] truncate">
                        {props.description}
                    </h2>
                </div>
            </Link>
        </>
    );
};

export default ClassCard;
