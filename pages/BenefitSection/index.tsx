import Image from "next/image";
import React from "react";

const BenefitSection = () => {
    const BenefitInputData = [
        {
            title: "Limitless Exploration",
        },
        {
            title: "Interactive and Enjoyable",
        },
        {
            title: "Personalized Learning Paths",
        },
        {
            title: "Engage with a Learning Community",
        },
        {
            title: "Get Exclusive Premium Content",
        },
        {
            title: "Accessible Learning Everywhere",
        },
        {
            title: "Stay Inspired with New Experiences",
        },
    ];

    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-12 bg-white flex justify-center items-center">
                    <div>
                        <Image
                            src={"/benefitImage.webp"}
                            width={500}
                            height={500}
                            alt="Bocil VR"
                            className="bg-cover"
                        />
                    </div>
                </div>
                <div>
                    <h1 className="font-bold text-5xl max-w-lg">
                        Benefits of Educating Yourself in a World of Learning
                        Possibilities.
                    </h1>
                    <p className="mt-6">
                        Transform the way you learn with an immersive education
                        platform that goes beyond traditional boundaries.
                        Elevate your learning experience and unlock a world of
                        knowledge.
                    </p>
                    <ul className="grid grid-cols-2 gap-4 mt-6">
                        {BenefitInputData.map((input, id) => (
                            <li key={id} className="font-medium">
                                {id + 1}.{input.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default BenefitSection;
