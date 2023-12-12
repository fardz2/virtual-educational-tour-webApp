import ArticleCard from "@/components/ArticleCard";
// import GeneratorTopic from "@/components/GeneratorTopic";
import AppNavbar from "@/components/Navigation/AppNavbar";
import ForumSection from "@/pages/ForumSection";
import TourSection from "@/pages/TourSection";
import React from "react";

const ForumPage = () => {
    return (
        <>
            <section className="mt-6 grid grid-cols-2 gap-12">
                {/* <div className="col-span-2">
                    <GeneratorTopic />
                </div> */}
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </section>
        </>
    );
};

export default ForumPage;
