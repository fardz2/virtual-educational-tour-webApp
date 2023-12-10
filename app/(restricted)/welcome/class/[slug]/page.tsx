import React from "react";
import AppNavbar from "@/components/Navigation/AppNavbar";
import ClassCard from "@/components/ClassCard";
import Image from "next/image";
import Link from "next/link";

const page = ({ params }: { params: { slug: string } }) => {

    return (
        <>
            <section className="flex flex-col min-h-screen bg-white px-4 col-span-8 mx-auto pt-12 gap-4 py-12">
                <h1 className="text-4xl font-bold">
                    Ini Lorem Ipsum Dolor Si Amet Itulah Pokoknya Ini Judul
                </h1>
                <div>
                    <hr />
                    <div className="py-4 flex justify-between items-center">
                        <h1>Dibuat oleh siapa</h1>
                        <div className="flex gap-4">
                            Button List Kelas kaya yutub
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="w-full h-96 bg-slate-300">
                    <Image
                        src={``}
                        width={400}
                        height={400}
                        alt="ini video kelas"
                    />
                </div>
                <div>
                    <span className="mb-4">
                        {"____"}Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Accusantium tenetur, nam ipsa iure a
                        dolorum recusandae dolore explicabo. Culpa quod
                        molestiae natus quasi magni perspiciatis? Ea modi natus
                        aliquam, assumenda unde placeat! Placeat ratione
                        asperiores numquam saepe laborum recusandae. Aspernatur
                        quod qui provident alias quisquam, sed dignissimos
                        impedit deserunt, vero sunt consequuntur quidem vitae
                        delectus itaque! Ullam fugiat molestiae facere quibusdam
                        odit, aperiam odio atque esse molestias animi! Molestias
                        incidunt quae sint officiis nisi. Eos voluptatum optio
                        harum distinctio porro soluta quod non possimus quas
                        odio doloribus dolore quidem nemo tenetur, esse iure
                        dolorem ex natus accusantium, sed sit molestias!
                    </span>
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
                <div className="w-full">
                    <Link href={""} className="flex underline justify-end">
                        Pagination
                    </Link>
                </div>
                <h1 className="mt-6 text-xl font-bold">
                    Rekomendasi Tour Lain Untuk Anda
                </h1>
                <div className="flex flex-wrap justify-between gap-6">
                </div>
            </section>
        </>
    );
};

export default page;
