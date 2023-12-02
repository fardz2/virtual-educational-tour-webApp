import React from "react";

const page = ({ params }: { params: { slug: string }}) => {
    return (
        <>
            <div>Tour: {params.slug}</div>
        </>
    );
};

export default page;
