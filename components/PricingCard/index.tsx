import React from "react";
import Link from "next/link";

interface PricingCardProps {
    favorit: boolean
}

const PricingCard = (props: PricingCardProps) => {
    return (
        <>
            <div className={`w-80 p-6 h-full border rounded-lg flex flex-col gap-6 bg-white transition-all duration-300 hover:scale-105 ${props.favorit ? "scale-105" : ""}`}>
                <div className="mt-4">
                    <h1 className="text-3xl font-semibold">Nama Pricing</h1>
                    <p className="mt-2 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde aliquid explicabo qui.</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold">harga pricing</h1>
                    <p className="mt-1">perhitungan pricing</p>
                </div>
                <div className="flex flex-col gap-2">
                    <Link href={`/`} className="bg-blue-600 py-2.5 text-center rounded text-white font-medium">Button CTA</Link>
                    <Link href={`/`} className="bg-white py-2.5 text-center rounded text-gray-600 font-medium">Button Contact Khusus Team</Link>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">keuntungan</h2>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                    <h2 className="text-lg font-semibold">keuntungan</h2>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default PricingCard;
