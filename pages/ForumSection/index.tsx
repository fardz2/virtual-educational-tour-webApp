"use client";
import ForumCard from "@/components/ForumCard";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ForumSection = (): React.JSX.Element => {
    const [article, setArticle] = useState([]);

    useEffect(() => {
        getArticle();
    }, []);
    const getArticle = async () => {
        const headers = {
            "Content-Type": "application/json",
        };
        const response = await axios.get(
            `https://virtual-educational-vr-api-production.up.railway.app/api/article`,
            {
                headers,
            },
        );
        setArticle(response.data.data);
    };
    return (
        <>
            <div className="px-4 py-6">
                <Link
                    href={`/welcome/forum/article/new`}
                    className="w-full flex justify-center items-center text-center py-2.5 border shadow-sm rounded-md bg-white font-medium hover:opacity-90"
                >
                    Add Topics
                </Link>
                <h1 className="mt-6 font-bold text-2xl">
                    Top 10 Article This Month
                </h1>
                <div className="flex flex-col gap-4 mt-4">
                    {article.map((e: any) => (
                        <ForumCard
                            key={e.id}
                            slug={e.slug_title}
                            title={e.title}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ForumSection;
