"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";
import { DiscussionEmbed } from "disqus-react";

const Page = ({ params }: { params: { slug: string } }) => {
    const [infoArticle, setInfoArticle] = useState({
        id: "",
        title: "",
        user: "",
        content: "",
    });
    useEffect(() => {
        getInfoArticle();
    }, [infoArticle]);
    const getInfoArticle = async () => {
        const headers = {
            "Content-Type": "application/json",
        };
        const response = await axios.get(
            `https://virtual-educational-vr-api-production.up.railway.app/api/article/${params.slug}`,
            {
                headers,
            },
        );
        setInfoArticle({
            id: response.data.data.id,
            title: response.data.data.title,
            user: response.data.data.username,
            content: response.data.data.content,
        });
    };
    return (
        <>
            <section className="flex flex-col min-h-screen bg-white px-4 col-span-8 mx-auto pt-12 gap-4 py-12">
                <h1 className="text-4xl font-bold">{infoArticle?.title}</h1>
                <div>
                    <hr />
                    <div className="py-4 flex justify-between items-center">
                        <h1>Dibuat oleh {infoArticle?.user}</h1>
                        <div className="flex gap-4">
                            Button List Kelas kaya yutub
                        </div>
                    </div>
                    <hr />
                </div>
                {parse(`${infoArticle?.content}`)}
            </section>
            <DiscussionEmbed
                shortname="EduVenturer"
                config={{
                    url: `https://yanglekhkomik.netlify.app/`,
                    identifier: infoArticle?.title,
                    title: infoArticle?.title,
                    language: "id",
                }}
            />
        </>
    );
};

export default Page;
