import React from "react";
import FeatureCard from "@/components/FeatureCard";

const FeatureSection = () => {
    const FeatureInputData = [
        {
            title: "Discover Limitless Education",
            desc: "Dive into an educational journey where every destination becomes a gateway to knowledge. Explore diverse subjects and expand your horizons effortlessly.",
        },
        {
            title: "Interactive Virtual Tours",
            desc: "Immerse yourself in the world of education through interactive 3D tours. Unleash the power of technology to bring subjects to life in a way you've never experienced before.",
        },
        {
            title: "Educational Insights at Your Fingertips",
            desc: "From historic landmarks to cutting-edge scientific discoveries, access detailed insights and curated content at your fingertips. Stay informed, stay inspired.",
        },
        {
            title: "Personalized Learning Adventures",
            desc: "Tailor your educational journey to match your interests. With personalized recommendations and favorite destinations, your learning adventure is uniquely yours.",
        },
        {
            title: "Join Engaging Discussions",
            desc: "Connect with a community of learners. Share experiences, ask questions, and be part of discussions that go beyond the classroom, creating a vibrant space for shared knowledge.",
        },
        {
            title: "Unlock Exclusive Premium Content",
            desc: "Take your learning to the next level with our premium subscription. Access exclusive content, participate in advanced courses, and enjoy a world of educational possibilities.",
        },
        {
            title: "Real-Time Learning Analytics",
            desc: "rack your progress with real-time analytics. Understand your learning patterns, receive insights, and celebrate your educational achievements every step of the way.",
        },
        {
            title: "Destinations Beyond Boundaries",
            desc: "Embark on a journey that knows no boundaries. Whether you're interested in art, science, or history, our destinations offer a diverse range of learning opportunities.",
        },
    ];

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-4xl md:text-5xl text-center max-w-lg">
                    Explore the Future of Learning with Our Features
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-3 justify-start items-start gap-4 mt-24">
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
