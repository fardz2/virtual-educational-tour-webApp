import React from "react";
import Link from "next/link";

interface ButtonProps {
    href: string;
    text: string;
}

const Button = ( props: ButtonProps ) => {
    return (
        <>
            <Link href={props.href} className="px-6 py-4 bg-sky-600 text-white rounded font-medium border">{props.text}</Link>
        </>
    );
};

export default Button;
