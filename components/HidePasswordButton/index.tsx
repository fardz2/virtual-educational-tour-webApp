"use client";

import React, { useState } from "react";
import { Eye, EyeSlash } from "@phosphor-icons/react";

interface passwordProps {
    id: string;
    label: string;
    register: any;
    error: any;
}

const HidePasswordButton = (props: passwordProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const { onChange, onBlur, name, ref } = props.register;

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
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                    ref={ref}
                    className="mt-1 w-full h-11 border rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
                <button
                    onClick={() => {
                        setShowPassword((prev) => !prev);
                    }}
                    className={`absolute top-1 right-6 translate-x-1/2 translate-y-1/2`}
                >
                    {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
                </button>
            </div>
            {props.label == "Password"
                ? props.error.password && (
                    <p role="alert">{props.error.password.message}</p>
                )
                : ""}
        </div>
    );
};

export default HidePasswordButton;
