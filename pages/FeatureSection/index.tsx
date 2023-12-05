"use client";

import React from "react";
import FeatureCard from "@/components/FeatureCard";
import { ClockCountdown, ChatsCircle } from "@phosphor-icons/react";

const FeatureSection = () => {
    const FeatureInputData = [
        {
            icon: "<ClockCountdown size={24} />",
            title: "Discover Limitless Education",
            desc: "Dive into an educational journey where every destination becomes a gateway to knowledge. Explore diverse subjects and expand your horizons effortlessly.",
        },
        {
            icon: "",
            title: "Interactive Virtual Tours",
            desc: "Immerse yourself in the world of education through interactive 3D tours. Unleash the power of technology to bring subjects to life in a way you've never experienced before.",
        },
        {
            icon: "",
            title: "Personalized Learning Adventures",
            desc: "Tailor your educational journey to match your interests. With personalized recommendations and favorite destinations, your learning adventure is uniquely yours.",
        },
        {
            icon: "",
            title: "Join Engaging Discussions",
            desc: "Connect with a community of learners. Share experiences, ask questions, and be part of discussions that go beyond the classroom, creating a vibrant space for shared knowledge.",
        },
        {
            icon: "",
            title: "Unlock Exclusive Premium Content",
            desc: "Take your learning to the next level with our premium subscription. Access exclusive content, participate in advanced courses, and enjoy a world of educational possibilities.",
        },
        {
            icon: "",
            title: "Real-Time Learning Analytics",
            desc: "rack your progress with real-time analytics. Understand your learning patterns, receive insights, and celebrate your educational achievements every step of the way.",
        },
    ];

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-4xl md:text-5xl text-center max-w-lg dark:text-slate-50">
                    Explore the Future of Learning with Our Features
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-start items-start gap-4 mt-24">
                    {FeatureInputData.map((input, id) => (
                        <FeatureCard
                            key={id}
                            title={input.title}
                            desc={input.desc}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default FeatureSection;
