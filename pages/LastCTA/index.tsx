import Image from "next/image";
import React from "react";

const LastCTA = () => {
    return (
        <section className="max-w-5xl py-12 dark:bg-gradient-to-tl dark:from-gray-300 dark:to-gray-50 bg-gradient-to-br from-tealPrim to-tealSec px-5 md:px-12 rounded-lg shadow-2xl shadow-tealSec/30 dark:shadow-gray-50/20">
            <div className=" px-4 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-y-10">
                    <div>
                        <Image
                            className="object-cover w-16 h-16 rounded-full"
                            src="https://placehold.co/400x400/png"
                            alt=""
                            height={10}
                            width={10}
                        />
                        <blockquote>
                            <p className="mt-6 text-xl leading-relaxed text-gray-50 dark:text-gray-900">
                                “In the vast landscape of digital education, the
                                true pioneers are those who explore beyond the
                                limits of traditional learning. Embrace the
                                metaverse of knowledge, where every click
                                propels you into a realm of limitless
                                exploration.”
                            </p>
                        </blockquote>
                        <p className="mt-6 text-base font-bold text-gray-50 dark:text-gray-900">
                            EduVenturer
                        </p>
                        <p className="mt-1 text-base text-gray-100 dark:text-gray-900">
                            Platform Edukasi Interaktif Masa Depan
                        </p>
                    </div>

                    <div>
                        <div className="overflow-hidden bg-white rounded-lg">
                            <div className="p-8 lg:px-12 lg:py-10">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Ready to Dive into the Future of Learning?
                                </h3>
                                <p className="mt-2 text-base text-gray-600 capitalize">
                                    Unlock the Gates to Knowledge and embark on
                                    Your Educational Odyssey Now!
                                </p>

                                <a
                                    href="#"
                                    title=""
                                    className="flex items-center justify-center w-full px-4 py-3 mt-8 text-base font-medium text-white transition-all duration-200 bg-blue-600 border-2 border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700"
                                    role="button"
                                >
                                    Start Exploring
                                </a>

                                <a
                                    href="#"
                                    title=""
                                    className="flex items-center justify-center w-full px-4 py-3 mt-4 text-base font-medium text-black transition-all duration-200 bg-transparent rounded-md hover:bg-black focus:bg-black hover:text-white focus:text-white"
                                    role="button"
                                >
                                    Talk to sales
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LastCTA;
