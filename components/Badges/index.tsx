import React from "react";
import Link from "next/link";
import path from "path";

interface BadgeProps {
    href: string;
    type: string;
    text: string;
}

const Badge = (props: BadgeProps) => {
    const pathNavigation = "/welcome/tour/";

    return (
        <>
            <Link
                href={`${pathNavigation}category?=${props.type}`}
                className="px-2.5 py-0.5 text-sm bg-blue-100 text-blue-700"
            >
                {props.text}
            </Link>
        </>
    );
};

export default Badge;
