"use client";

import React, { useState } from "react";
import { UserCircle, List } from "@phosphor-icons/react";

const AccountButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div className="py-6">
            <div className="relative inline-block">
                <button
                    type="button"
                    onClick={toggleDropdown}
                    className="flex flex-row gap-2 border rounded-lg shadow-sm bg-white px-4 py-1.5">
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
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    My Article
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    History
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    Forum
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-red-700 rounded-b-lg hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    Log Out
                                </a>
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
