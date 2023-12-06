"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProfilePage = () => {
    return (
        <>
            <div className="rounded-lg bg-white py-6 border">
                <section className="px-6 pb-6">
                    <nav aria-label="Breadcrumb">
                        <ol className="flex items-center gap-1 text-sm text-gray-600">
                            <li>
                                <a
                                    href="#"
                                    className="block transition hover:text-gray-700"
                                >
                                    <span className="sr-only"> Home </span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                </a>
                            </li>

                            <li className="rtl:rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="block transition hover:text-gray-700 text-base"
                                >
                                    {" "}
                                    Profile{" "}
                                </a>
                            </li>
                        </ol>
                    </nav>
                </section>
                <hr />
                <section>
                    <div className="bg-gray-100 py-4 px-6 m-6 rounded">
                        Ini info aja{" "}
                    </div>
                    <div className="flex flex-col gap-6 px-6">
                        <Link
                            href={"/welcome/profile/edit/personal-data"}
                            className="font-medium"
                        >
                            Data Pribadi
                        </Link>
                        <Link
                            href={"/welcome/profile/edit/personal-contact"}
                            className="font-medium"
                        >
                            Kontak Pribadi
                        </Link>
                        <Link href={""} className="font-medium">
                            Akun Media Sosial
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ProfilePage;
