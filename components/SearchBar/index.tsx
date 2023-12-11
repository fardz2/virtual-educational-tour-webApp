import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";

const SearchBar = ({}) => {
    return (
        <>
            <div className="relative w-full">
                <input
                    type="text"
                    id="Search"
                    placeholder="Search for..."
                    className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm px-4 border"
                />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                    <button
                        type="button"
                        className="text-gray-600 hover:text-gray-700"
                    >
                        <span className="sr-only">Search</span>
                        <MagnifyingGlass size={20} color="gray" />
                    </button>
                </span>
            </div>
        </>
    );
};

export default SearchBar;
