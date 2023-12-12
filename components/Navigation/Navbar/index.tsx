"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
    const [nav, setNav] = useState<boolean>(false);
    const { status }: { status: string } = useSession();

    const links = [
        {
            id: 1,
            link: "About Us",
        },
        {
            id: 2,
            link: "Our Services",
        },
        {
            id: 3,
            link: "Pricing",
        },
        {
            id: 4,
            link: "Contact Us",
        },
    ];

    return (
        <>
            <nav className="mx-auto fixed w-full justify-center h-[72px] bg-gray-50/30 dark:bg-gray-900/50 backdrop-blur-lg z-50">
                {/* Desktop Menu */}
                <div className="flex items-center justify-between h-full px-5 md:px-16 w-full">
                    <div
                        onClick={() => setNav(!nav)}
                        className="w-[92px] cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
                    >
                        {nav ? "open" : "close"}
                    </div>
                    <Link
                        href={"/"}
                        className="flex items-center justify-end md:justify-start w-[92px] cursor-pointer capitalize font-medium text-white"
                    >
                        EduVenturer
                    </Link>
                    <div className="flex">
                        <ul className="hidden md:flex">
                            {links.map(({ id, link }) => (
                                <li
                                    key={id}
                                    className="px-4 cursor-pointer capitalize font-medium text-gray-900 hover:scale-105 hover:text-blue-600 dark:hover:text-gray-900 dark:text-gray-50 duration-300 transition-all link-underline hover:underline"
                                >
                                    <Link href={link}>{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-[92px] md:w-auto">
                        {status == "authenticated" ? (
                            <>
                                <button
                                    onClick={() => signOut()}
                                    className="border border-slate-900 py-3 mr-4 rounded hidden md:inline-flex px-4 dark:text-gray-50 dark:border-none justify-center items-center cursor-pointer capitalize font-medium text-gray-900 hover:bg-gray-50 hover:text-slate-900 duration-200"
                                >
                                    logOut
                                </button>
                                <Link
                                    href={"/welcome"}
                                    className="px-4 py-3 dark:bg-transparent rounded cursor-pointer capitalize font-medium text-gray-50 hover:text-gray-900 duration-200 dark:border dark:border-gray-50 bg-slate-900 hover:bg-gray-50"
                                >
                                    Dashboard
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href={"/login"}
                                    className="border border-slate-900 h-[43.5px] mr-4 rounded hidden md:inline-flex px-4 dark:text-gray-50 dark:border-none justify-center items-center cursor-pointer capitalize font-medium text-slate-900 hover:bg-slate-200 hover:text-slate-900 duration-200"
                                >
                                    Masuk
                                </Link>

                                <Link
                                    href={"/register"}
                                    className="px-4 py-3 dark:bg-transparent rounded cursor-pointer capitalize font-medium text-white hover:text-white duration-200 dark:border dark:border-gray-50 bg-slate-900 hover:bg-slate-800"
                                >
                                    Daftar
                                </Link>
                            </>
                        )}
                    </div>
                    {nav && (
                        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                            {links.map(({ id, link }) => (
                                <li
                                    key={id}
                                    className="px-4 cursor-pointer capitalize py-6 text-4xl"
                                >
                                    <Link
                                        onClick={() => setNav(!nav)}
                                        href={link}
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
