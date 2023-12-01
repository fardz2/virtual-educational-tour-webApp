"use client";
import SearchBar from "@/components/SearchBar";
import React from "react";
import Link from "next/link";
import AccountButton from "@/components/AccountButton";
import {
    ChatsCircle,
    GlobeHemisphereWest,
    GraduationCap,
    Globe,
    Sun,
} from "@phosphor-icons/react";
import FilterButton from "@/components/FilterButton";

const AppNavbar = () => {
    const pathName = "/welcome";

    return (
        <>
            <nav className="w-full sticky">
                <div className="w-full h-16 bg-white px-5 md:px-12 border-b flex justify-between items-center">
                    <div className="px-4">Logo</div>
                    <div className="flex flex-row gap-4 items-center h-min">
                        <Sun size={24} />
                        <Globe size={24} />
                        <AccountButton />
                    </div>
                </div>
                <div className="w-full h-16 bg-white px-5 flex justify-between items-center md:px-12 drop-shadow-md">
                    <div className="md:flex flex-row gap-6 hidden items-center">
                        <div>
                            <Link
                                href={`${pathName}/tour`}
                                className="flex flex-row gap-1 items-center px-4 py-2"
                            >
                                <GlobeHemisphereWest size={24} />
                                <h1>Tours</h1>
                            </Link>
                        </div>
                        <div>
                            <Link
                                href={`${pathName}/class`}
                                className="flex flex-row gap-1 items-center px-4 py-2"
                            >
                                <GraduationCap size={24} />
                                <h1>Classes</h1>
                            </Link>
                        </div>
                        <div className="hover:underline-offset-2">
                            <Link
                                href={`${pathName}/forum`}
                                className="flex flex-row gap-1 items-center px-4 py-2 hover:bg-slate-100"
                            >
                                <ChatsCircle size={24} />
                                <h1>Forums</h1>
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-end gap-4 items-center">
                        <div>
                            <SearchBar />
                        </div>
                        <div>
                            <FilterButton />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default AppNavbar;
