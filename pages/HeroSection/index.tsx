"use client";

import React from "react";
import Button from "@/components/Button";
import Image from "next/image";

const HeroSection = () => {
    return (
        <>
            <section className="h-full">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 pt-32 pl-5 md:pl-24 min-h-screen">
                    <div className="">
                        <h1 className="text-6xl md:text-7xl font-bold">
                            Get Ready to Explore Every Places in the World
                        </h1>
                        <div className="py-12 space-x-4">
                            <Button
                                href="/signup"
                                text="Get Started"
                                primary={true}
                            />
                            <Button
                                href="/about-us"
                                text="More About Us"
                                primary={false}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end items-end">
                        <Image
                            src={""}
                            width={540}
                            height={540}
                            alt="Virtual Reality"
                            className=""
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
