"use client";

import React, { useState } from "react";

const FaqSection = () => {
    const [faq, setFaq] = useState([
        {
            question: "Bagaimana cara bergabung dengan paket Group Plan?",
            answer: "Anda dapat bergabung dengan Group Plan dengan mengundang anggota kelompok Anda ke dalam platform. Kami menyediakan manajemen pengguna yang mudah untuk meningkatkan kolaborasi.",
            open: false,
        },
        {
            question: "Apakah ada batasan jumlah anggota dalam Group Plan?",
            answer: 'Ada batasan jumlah anggota dalam tiap Group Plan dengan perhitungan harga yang berbeda. Kami mendukung kolaborasi dalam skala besar untuk memfasilitasi pembelajaran bersama. Untuk skala institusi pendidikan dapat menghubungi <a href={``} class="underline cursor-pointer text-blue-300">Kontak Kami</a>',
            open: false,
        },
        {
            question:
                "Apakah konten premium dari Professional Plan dapat diakses secara offline?",
            answer: "Saat ini, konten premium hanya dapat diakses secara online untuk memastikan pengalaman terbaik dan pembaruan konten yang reguler.",
            open: false,
        },
        {
            question:
                "Bagaimana cara memberikan umpan balik atau saran untuk platform ini?",
            answer: "Kami sangat menghargai kontribusi dan umpan balik dari pengguna kami. Anda dapat mengirimkan saran atau umpan balik melalui formulir kontak di halaman bantuan kami.",
            open: false,
        },
    ]);

    const toggleFaq = (index: any) => {
        setFaq(
            faq.map((item, i) => {
                if (i === index) {
                    item.open = !item.open;
                } else {
                    item.open = false;
                }

                return item;
            }),
        );
    };

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24 dark:bg-gray-900">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl dark:text-neutral-50">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faq.map((item, index) => (
                        <div
                            key={index}
                            className="transition-all duration-200 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
                        >
                            <button
                                type="button"
                                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                onClick={() => toggleFaq(index)}
                            >
                                <span className="flex text-lg font-semibold text-black dark:text-neutral-50">
                                    {" "}
                                    {item.question}{" "}
                                </span>

                                <svg
                                    className={`w-6 h-6 text-gray-400 ${
                                        item.open ? "rotate-180" : ""
                                    }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            <div
                                className={`${
                                    item.open ? "block" : "hidden"
                                } px-4 pb-5 sm:px-6 sm:pb-6 dark:text-gray-100 text-gray-900`}
                            >
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: item.answer,
                                    }}
                                ></p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-600 dark:text-gray-300 text-base mt-8">
                    Tidak menemukan jawaban yang Anda cari?{" "}
                    <a
                        href="#"
                        title=""
                        className="font-medium text-blue-600 dark:text-blue-300 transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-300 focus:text-blue-700 hover:underline"
                    >
                        Hubungi Kontak Kami
                    </a>
                </p>
            </div>
        </section>
    );
};

export default FaqSection;
