import AppNavbar from "@/components/Navigation/AppNavbar";
import ClassSection from "@/pages/ClassSection";
import ForumSection from "@/pages/ForumSection";
import TourSection from "@/pages/TourSection";
import React from "react";

const ClassPage = () => {
    return (
        <>
            <section className="bg-gray-50">
                <AppNavbar />
                <section className="min-h-screen grid md:gap-6 grid-cols-1 md:grid-cols-11 px-5 md:px-12">
                    <div className="md:col-span-8 ">
                        <ClassSection />
                    </div>
                    <div className="md:col-span-3">
                        <ForumSection />
                    </div>
                </section>
            </section>
        </>
    );
};

export default ClassPage;
