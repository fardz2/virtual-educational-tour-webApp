import React from "react";
import Link from "next/link";

interface FeatureCardProps {
    title: string;
    desc: string;
}

const FeatureCard = (props: FeatureCardProps) => {
    return (
        <>
            <div className="flex flex-col gap-2 p-4 rounded-lg">
                <div className="w-6 h-6 bg-slate-200"></div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-bold">{props.title}</h1>
                    <p>{props.desc}</p>
                </div>
            </div>
        </>
    );
};

export default FeatureCard;
