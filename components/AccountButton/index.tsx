"use client";

import React, { useState } from "react";
import { UserCircle, List } from "@phosphor-icons/react";
import Link from "next/link";
import { signOut } from "next-auth/react";

const AccountButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div className="py-6 z-50">
            <div className="relative inline-block">
                <button
                    type="button"
                    onClick={toggleDropdown}
                    className="flex flex-row gap-2 border rounded-lg shadow-sm bg-white px-4 py-1.5"
                >
                    <List size={28} color="black" />
                    <UserCircle size={28} weight="fill" />
                </button>

                {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <ul
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                        >
                            <li>
                                <Link
                                    href="/welcome/profile"
                                    className="block px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    Profile
                                </Link>
                            </li>
                            <li className="bg-white px-4 py-2 hover:bg-gray-100">
                                <Link
                                    href={`/welcome/profile/analytic`}
                                    className=""
                                >
                                    Analisis Saya
                                </Link>
                            </li>
                            <li className="bg-white px-4 py-2 hover:bg-gray-100">
                                <Link
                                    href={`/welcome/profile/saved`}
                                    className=""
                                >
                                    Konten Tersimpan
                                </Link>
                            </li>
                            <li className="bg-white px-4 py-2 hover:bg-gray-100">
                                <Link
                                    href={`/welcome/profile/edit/password`}
                                    className=""
                                >
                                    Ganti Kata Sandi
                                </Link>
                            </li>
                            <li className="hover:bg-gray-100">
                                <button
                                    className="block px-4 py-2 text-red-600 rounded-b-lg"
                                    onClick={() =>
                                        signOut({
                                            redirect: true,
                                            callbackUrl: "/",
                                        })
                                    }
                                >
                                    Log Out
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

//     return (
//         <>
//             <div className="flex flex-row gap-2 border rounded-lg shadow-sm bg-white px-4 py-1.5">
//                 <List size={28} color="black"/>
//                 <UserCircle size={28} weight="fill" />
//             </div>
//         </>
//     );
// };

export default AccountButton;
