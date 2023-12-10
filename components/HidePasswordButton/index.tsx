"use client";

import React, { useState } from "react";

interface passwordProps {
    id: string;
    label: string;
}

const HidePasswordButton = (props: passwordProps) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="">
            <label
                htmlFor={props.id}
                className="block text-sm font-medium text-gray-700"
            >
                {props.label}
            </label>

            <div className="relative w-full h-min">
                <input
                    type={`${showPassword ? "password" : "text"}`}
                    id={props.id}
                    name={props.label}
                    className="mt-1 w-full h-11 border rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
                <button
                    onClick={() => {setShowPassword((prev) => !prev)}}
                    className={`absolute top-1 right-6 translate-x-1/2 translate-y-1/2`}
                >
                    {showPassword ? "show" : "hide"}
                </button>
            </div>
        </div>
    );
};

export default HidePasswordButton;
