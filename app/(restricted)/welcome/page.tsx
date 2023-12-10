import AppNavbar from "@/components/Navigation/AppNavbar";
import ClassSection from "@/pages/ClassSection";
import ForumSection from "@/pages/ForumSection";
import TourSection from "@/pages/TourSection";
import Link from "next/link";
import React from "react";

const WelcomePage = () => {
    return (
        <>
            <TourSection />
            <div className="mt-6 mb-12 flex flex-col justify-center items-center gap-4">
                <p className="font-semibold text-gray-900 text-2xl">
                    Lanjutkan menjelajah tur lainnya?
                </p>
                <Link href={`/welcome/tour`} className="py-2.5 px-4 text-center font-medium bg-neutral-900 text-white rounded">
                    Explore More
                </Link>
            </div>
            <ClassSection />
            <div className="mt-6 mb-12 flex flex-col justify-center items-center gap-4">
                <p className="font-semibold text-gray-900 text-2xl">
                    Lanjutkan belajar kelas lainnya?
                </p>
                <Link href={`/welcome/class`} className="py-2.5 px-4 text-center font-medium bg-neutral-900 text-white rounded">
                    Explore More
                </Link>
            </div>
        </>
    );
};

export default WelcomePage;
