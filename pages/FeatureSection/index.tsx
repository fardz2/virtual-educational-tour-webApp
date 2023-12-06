"use client";

import React from "react";
import {
    ClockCountdown,
    ChatsCircle,
    ArrowsOut,
    UsersThree,
    MapTrifold,
    Trophy,
} from "@phosphor-icons/react";

const FeatureSection = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-4xl md:text-5xl text-center max-w-lg dark:text-slate-50">
                    Explore the Future of Learning with Our Features
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-start items-start gap-4 mt-24">
                    {/* 1 */}
                    <div className="flex flex-col gap-2 p-4 rounded-lg">
                        <div className="w-12 h-12 rounded dark:bg-blue-200 bg-blue-600 justify-center items-center flex">
                            <ArrowsOut
                                size={32}
                                className="dark:text-bluePrim text-gray-50"
                            />
                        </div>
                        <div className="flex flex-col gap-1 ">
                            <h1 className="text-xl md:text-2xl font-bold dark:text-neutral-100">
                                Discover Limitless Education
                            </h1>
                            <p className="text-gray-700 dark:text-gray-200">
                                Dive into an educational journey where every
                                destination becomes a gateway to knowledge.
                                Explore diverse subjects and expand your
                                horizons effortlessly
                            </p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="flex flex-col gap-2 p-4 rounded-lg">
                        <div className="w-12 h-12 rounded dark:bg-blue-200 bg-blue-600 justify-center items-center flex">
                            <UsersThree
                                size={32}
                                className="dark:text-bluePrim text-gray-50"
                            />
                        </div>
                        <div className="flex flex-col gap-1 ">
                            <h1 className="text-xl md:text-2xl font-bold dark:text-neutral-100">
                                Interactive Virtual Tours
                            </h1>
                            <p className="text-gray-700 dark:text-gray-200">
                                Immerse yourself in the world of education
                                through interactive 3D tours. Unleash the power
                                of technology to bring subjects to life in a way
                                you have never experienced before
                            </p>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="flex flex-col gap-2 p-4 rounded-lg">
                        <div className="w-12 h-12 rounded dark:bg-blue-200 bg-blue-600 justify-center items-center flex">
                            <MapTrifold
                                size={32}
                                className="dark:text-bluePrim text-gray-50"
                            />
                        </div>
                        <div className="flex flex-col gap-1 ">
                            <h1 className="text-xl md:text-2xl font-bold dark:text-neutral-100">
                                Personalized Learning Adventures
                            </h1>
                            <p className="text-gray-700 dark:text-gray-200">
                                Tailor your educational journey to match your
                                interests. With personalized recommendations and
                                favorite destinations, your learning adventure
                                is uniquely yours
                            </p>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="flex flex-col gap-2 p-4 rounded-lg">
                        <div className="w-12 h-12 rounded dark:bg-blue-200 bg-blue-600 justify-center items-center flex">
                            <ChatsCircle
                                size={32}
                                className="dark:text-bluePrim text-gray-50"
                            />
                        </div>
                        <div className="flex flex-col gap-1 ">
                            <h1 className="text-xl md:text-2xl font-bold dark:text-neutral-100">
                                Join Engaging Discussions
                            </h1>
                            <p className="text-gray-700 dark:text-gray-200">
                                Connect with a community of learners. Share
                                experiences, ask questions, and be part of
                                discussions that go beyond the classroom,
                                creating a vibrant space for shared knowledge
                            </p>
                        </div>
                    </div>
                    {/* 5 */}
                    <div className="flex flex-col gap-2 p-4 rounded-lg">
                        <div className="w-12 h-12 rounded dark:bg-blue-200 bg-blue-600 justify-center items-center flex">
                            <Trophy
                                size={32}
                                className="dark:text-bluePrim text-gray-50"
                            />
                        </div>
                        <div className="flex flex-col gap-1 ">
                            <h1 className="text-xl md:text-2xl font-bold dark:text-neutral-100">
                                Exclusive Premium Content
                            </h1>
                            <p className="text-gray-700 dark:text-gray-200">
                                Take your learning to the next level with our
                                premium subscription. Access exclusive content,
                                participate in advanced courses, and enjoy a
                                world of educational possibilities
                            </p>
                        </div>
                    </div>
                    {/* 6 */}
                    <div className="flex flex-col gap-2 p-4 rounded-lg">
                        <div className="w-12 h-12 rounded dark:bg-blue-200 bg-blue-600 justify-center items-center flex">
                            <ClockCountdown
                                size={32}
                                className="dark:text-bluePrim text-gray-50"
                            />
                        </div>
                        <div className="flex flex-col gap-1 ">
                            <h1 className="text-xl md:text-2xl font-bold dark:text-neutral-100">
                                Real-Time Learning Analytics
                            </h1>
                            <p className="text-gray-700 dark:text-gray-200">
                                Track your progress with real-time analytics.
                                Understand your learning patterns, receive
                                insights, and celebrate your educational
                                achievements every step of the way
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureSection;
