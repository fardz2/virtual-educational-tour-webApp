import React from "react";

const page = () => {
    return (
        <>
            <section className="grid grid-cols-5 w-full px-5 md:px-12 gap-6">
                <div className="col-span-2 bg-blue-200 flex flex-col gap-4">
                    <div className="bg-white">c</div>
                    <div className="bg-green-500">d</div>
                </div>
                <div className="col-span-3 bg-red-200">b</div>
            </section>
        </>
    );
};

export default page;
