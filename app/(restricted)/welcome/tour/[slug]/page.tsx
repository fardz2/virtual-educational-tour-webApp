import AppNavbar from "@/components/Navigation/AppNavbar";
import TourCard from "@/components/TourCard";
import Image from "next/image";
import React from "react";
import virtualTours from "@/libs/dummyTour";
import RekomendasiTour from "@/pages/RekomenTurSection";

const Page = ({ params }: { params: { slug: string } }) => {
    return (
        <>
            <section className="flex flex-col min-h-screen bg-white px-4 col-span-8 mx-auto pt-12 gap-4">
                <h1 className="text-4xl font-bold">
                    {virtualTours.map((input, index) => (
                        <h1 key={index}>
                            {input.id === parseInt(params.slug)
                                ? input.title
                                : ""}
                        </h1>
                    ))}
                </h1>
                <div>
                    <hr />
                    <div className="py-4 flex justify-between items-center">
                        <h1>
                            {virtualTours.map((input, index) => (
                                <h1 key={index}>
                                    {input.id === parseInt(params.slug)
                                        ? input.author
                                        : ""}
                                </h1>
                            ))}
                        </h1>
                        <div className="flex gap-4">
                            <p>dilihat berapa kali</p>
                            <p>di like berapa kali</p>
                        </div>
                    </div>
                    <hr />
                </div>
                {/* <div className="w-full h-80 bg-slate-300">
                    <Image
                        src={""}
                        width={100}
                        height={100}
                        alt=""
                        className="bg-cover"
                    />
                </div> */}
                <div>
                    <iframe
                        width="926.54"
                        height="480"
                        src={virtualTours[parseInt(params.slug)-1].href}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>

                <div>
                    {virtualTours.map((input, index) => (
                        <p key={index} className="text-justify">
                            {input.id === parseInt(params.slug)
                                ? input.description
                                : ""}
                        </p>
                    ))}
                    <br />
                    <span>
                        ____Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Accusantium tenetur, nam ipsa iure a dolorum
                        recusandae dolore explicabo. Culpa quod molestiae natus
                        quasi magni perspiciatis? Ea modi natus aliquam,
                        assumenda unde placeat! Placeat ratione asperiores
                        numquam saepe laborum recusandae. Aspernatur quod qui
                        provident alias quisquam, sed dignissimos impedit
                        deserunt, vero sunt consequuntur quidem vitae delectus
                        itaque! Ullam fugiat molestiae facere quibusdam odit,
                        aperiam odio atque esse molestias animi! Molestias
                        incidunt quae sint officiis nisi. Eos voluptatum optio
                        harum distinctio porro soluta quod non possimus quas
                        odio doloribus dolore quidem nemo tenetur, esse iure
                        dolorem ex natus accusantium, sed sit molestias!
                    </span>
                </div>
                <RekomendasiTour />
            </section>
        </>
    );
};

export default Page;
