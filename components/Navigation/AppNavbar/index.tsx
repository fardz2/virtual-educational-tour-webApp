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
import { usePathname } from "next/navigation";

const AppNavbar = () => {
    const pathName = "/welcome";
    const pathNameNow = usePathname();

    return (
        <>
            <nav className="w-full sticky top-0 z-40">
                <div className="w-full h-16 bg-white px-5 md:px-12 border-b flex justify-between items-center">
                    <Link
                        href={`/welcome`}
                        className="px-4 font-semibold text-blue-600"
                    >
                        EduVenturer
                    </Link>
                    <div className="flex flex-row gap-4 items-center h-min">
                        <AccountButton />
                    </div>
                </div>
                <div
                    className={`w-full h-16 bg-white px-5 flex justify-between items-center md:px-12 drop-shadow-md`}
                >
                    <div className="md:flex flex-row gap-6 hidden items-center">
                        <div>
                            <Link
                                href={`${pathName}/tour`}
                                className={`flex flex-row gap-1 items-center px-4 py-2 hover:bg-gray-100 rounded-lg ${
                                    pathNameNow === `/welcome/tour`
                                        ? "bg-blue-100 text-blue-700"
                                        : ""
                                }`}
                            >
                                <GlobeHemisphereWest size={24} />
                                <h1>Tours</h1>
                            </Link>
                        </div>
                        <div>
                            <Link
                                href={`${pathName}/class`}
                                className={`flex flex-row gap-1 items-center px-4 py-2 hover:bg-gray-100 rounded-lg ${
                                    pathNameNow === "/welcome/class"
                                        ? "bg-blue-100 text-blue-700"
                                        : ""
                                }`}
                            >
                                <GraduationCap size={24} />
                                <h1>Classes</h1>
                            </Link>
                        </div>
                        <div className="hover:underline-offset-2">
                            <Link
                                href={`${pathName}/forum`}
                                className={`flex flex-row gap-1 items-center px-4 py-2 hover:bg-gray-100 rounded-lg ${
                                    pathNameNow === "/welcome/forum"
                                        ? "bg-blue-100 text-blue-700"
                                        : ""
                                }`}
                            >
                                <ChatsCircle size={24} />
                                <h1>Forums</h1>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-fit flex justify-end gap-4 items-center">
                        <SearchBar />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default AppNavbar;
