import React from "react";
import Link from "next/link";

interface ButtonProps {
    href: string;
    text: string;
    primary: boolean;
}

const Button = (props: ButtonProps) => {
    return (
        <>
            <Link
                href={props.href}
                className={`py-4 font-medium ${
                    props.primary
                        ? "px-8 bg-blue-600 dark:bg-white dark:text-gray-950 text-white rounded hover:opacity-90"
                        : "px-6 text-white"
                }`}
            >
                {props.text}
            </Link>
        </>
    );
};

export default Button;
