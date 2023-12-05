import React from "react";
import Link from "next/link";

interface PricingCardProps {
    favorit: boolean;
    title: string;
    desc: string;
    benefit: string;
    price: string;
    calculation: string;
}

const PricingCard = (props: PricingCardProps) => {
    return (
        <>
            <div
                className={`w-80 p-6 h-full border rounded-lg flex flex-col gap-6 bg-white transition-all duration-300 hover:scale-105 ${
                    props.favorit ? "scale-105" : ""
                }`}
            >
                <div className="mt-4">
                    <h1 className="text-3xl font-bold">{props.title}</h1>
                    <p className="mt-2">{props.desc}</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold">{props.price}</h1>
                    <p className="mt-1">{props?.calculation}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <Link
                        href={`/`}
                        className="bg-blue-600 py-2.5 text-center rounded text-white font-medium"
                    >
                        Button CTA
                    </Link>
                    <Link
                        href={`/`}
                        className="bg-white py-2.5 text-center rounded text-gray-600 font-medium"
                    >
                        Button Contact Khusus Team
                    </Link>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">keuntungan</h2>
                    <ul>
                        <li>{props?.benefit}</li>
                        <li>{props?.benefit}</li>
                        <li>{props?.benefit}</li>
                    </ul>
                    <h2 className="text-lg font-semibold">keuntungan</h2>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default PricingCard;
