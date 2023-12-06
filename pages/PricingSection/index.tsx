/* eslint-disable react/no-unescaped-entities */
import TogglePricing from "@/components/TogglePricing";
import React from "react";

const PricingSection = () => {
    return (
        <>
            <div className="w-full flex justify-center items-center flex-col px-5 py-6 md:px-24">
                <h1 className=" mb-4 text-4xl font-bold text-center dark:text-gray-50 text-gray-900">
                    Unlock the Gates to Limitless Learning
                </h1>
                <p className="mb-20 text-center max-w-4xl dark:text-gray-300 text-gray-600">
                    "Unleash the full potential of your educational exploration
                    with our flexible pricing plans. Whether you're a solo
                    learner, a professional seeking in-depth insights, or part
                    of a group eager to collaborate, we have the perfect plan
                    for you.
                </p>
                <TogglePricing/>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                    <div className="divide-y divide-gray-200 bg-white rounded-lg border border-gray-200 shadow-sm hover:scale-105 duration-300 transition-all">
                        <div className="p-6 sm:px-8">
                            <h2 className="text-xl font-bold text-gray-900">
                                Starter Plan
                            </h2>

                            <p className="mt-1 text-gray-600">
                                Mulailah perjalanan edukasi interaktif Anda
                                dengan akses ke berbagai pengetahuan tanpa
                                hambatan.
                            </p>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-gray-950 sm:text-4xl">
                                    {" "}
                                    Free{" "}
                                </strong>
                            </p>

                            <button
                                disabled={true}
                                className={`mt-4 block rounded-md border w-full border-bluePrim bg-bluePrim py-3 text-center font-medium text-white hover:opacity-90 disabled:bg-gray-500`}
                            >
                                Get Started
                            </button>
                        </div>

                        <div className="p-6 sm:px-8">
                            <p className="text-lg font-medium text-gray-900 sm:text-xl">
                                What's included:
                            </p>

                            <ul className="mt-2 space-y-2 sm:mt-4">
                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-indigo-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>

                                    <span className="text-gray-700">
                                        {" "}
                                        Akses ke destinasi dan kelas gratis{" "}
                                    </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-indigo-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>

                                    <span className="text-gray-700">
                                        {" "}
                                        Pembaruan reguler dan konten yang terus
                                        bertambah{" "}
                                    </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-indigo-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>

                                    <span className="text-gray-700">
                                        {" "}
                                        Bergabung dengan komunitas dan ikuti
                                        diskusi{" "}
                                    </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-indigo-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>

                                    <span className="text-gray-700">
                                        {" "}
                                        Analisis perkembangan belajar secara
                                        akurat{" "}
                                    </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-red-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>

                                    <span className="text-gray-700">
                                        {" "}
                                        Kuis dan tugas edukatif tingkat lanjut{" "}
                                    </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-red-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>

                                    <span className="text-gray-700">
                                        {" "}
                                        Dukungan pelanggan prioritas 24/7{" "}
                                    </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-red-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>

                                    <span className="text-gray-700">
                                        {" "}
                                        Akses ke destinasi premium dan konten
                                        eksklusif{" "}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="divide-y divide-gray-200 bg-white rounded-lg border border-gray-200 shadow-sm hover:scale-105 duration-300 transition-all">
                        <div className="p-6 sm:px-8">
                            <h2 className="text-xl font-bold text-gray-900">
                                Professional Plan
                            </h2>

                            <p className="mt-2 text-gray-600">
                                Upgrade pengalaman belajar Anda dengan layanan
                                profesional kami. Dapatkan akses eksklusif ke
                                destinasi premium, kuis tingkat lanjut, dan
                                dukungan penuh lainnya.
                            </p>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                    {" "}
                                    Rp 25.000{" "}
                                </strong>

                                <span className="text-sm font-medium text-gray-700">
                                    /month
                                </span>
                            </p>

                            <button
                                disabled={true}
                                className={`mt-4 block rounded-md border w-full border-bluePrim bg-bluePrim py-3 text-center font-medium text-white hover:opacity-90`}
                            >
                                Get Started
                            </button>
                        </div>

                        <div className="p-6 sm:px-8">
                            <p className="text-lg font-medium text-gray-900 sm:text-xl">
                                What's included:
                            </p>

                            <ul className="mt-2 space-y-2 sm:mt-4">
                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-indigo-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>

                                    <span className="text-gray-700">
                                        {" "}
                                        Akses ke destinasi dan kelas gratis{" "}
                                    </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-indigo-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>

                                    <span className="text-gray-700">
                                        {" "}
                                        Pembaruan reguler dan konten yang terus
                                        bertambah{" "}
                                    </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-indigo-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>

                                    <span className="text-gray-700">
                                        {" "}
                                        Bergabung dengan komunitas dan ikuti
                                        diskusi{" "}
                                    </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-indigo-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>

                                    <span className="text-gray-700">
                                        {" "}
                                        Analisis perkembangan belajar secara
                                        akurat{" "}
                                    </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-indigo-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>

                                    <span className="text-gray-700">
                                        {" "}
                                        Kuis dan tugas edukatif tingkat lanjut{" "}
                                    </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-indigo-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>

                                    <span className="text-gray-700">
                                        {" "}
                                        Dukungan pelanggan prioritas 24/7{" "}
                                    </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-indigo-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>

                                    <span className="text-gray-700">
                                        {" "}
                                        Akses ke destinasi premium dan konten
                                        eksklusif{" "}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="divide-y divide-gray-200 bg-white rounded-lg border border-gray-200 shadow-sm hover:scale-105 duration-300 transition-all">
                        <div className="p-6 sm:px-8">
                            <h2 className="text-xl font-bold text-gray-900">
                                Enterprise Plan
                            </h2>

                            <p className="mt-2 text-gray-600">
                                Bagikan pengalaman belajar dengan teman,
                                keluarga, atau rekan kerja Anda. Paket Grup kami
                                memungkinkan kolaborasi dalam eksplorasi
                                pengetahuan.
                            </p>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                    {" "}
                                    100${" "}
                                </strong>

                                <span className="text-sm font-medium text-gray-700">
                                    /month
                                </span>
                            </p>

                            <a
                                className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                                href="#"
                            >
                                Get Started
                            </a>
                        </div>

                        <div className="p-6 sm:px-8">
                            <p className="text-lg font-medium text-gray-900 sm:text-xl">
                                What's included:
                            </p>

                            <ul className="mt-2 space-y-2 sm:mt-4">
                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-indigo-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>

                                    <span className="text-gray-700">
                                        {" "}
                                        Akses ke destinasi dan kelas gratis{" "}
                                    </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-indigo-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>

                                    <span className="text-gray-700">
                                        {" "}
                                        Pembaruan reguler dan konten yang terus
                                        bertambah{" "}
                                    </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-indigo-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>

                                    <span className="text-gray-700">
                                        {" "}
                                        Bergabung dengan komunitas dan ikuti
                                        diskusi{" "}
                                    </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-indigo-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>

                                    <span className="text-gray-700">
                                        {" "}
                                        Analisis perkembangan belajar secara
                                        akurat{" "}
                                    </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-indigo-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>

                                    <span className="text-gray-700">
                                        {" "}
                                        Kuis dan tugas edukatif tingkat lanjut{" "}
                                    </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-indigo-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>

                                    <span className="text-gray-700">
                                        {" "}
                                        Dukungan pelanggan prioritas 24/7{" "}
                                    </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-indigo-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>

                                    <span className="text-gray-700">
                                        {" "}
                                        Akses ke destinasi premium dan konten
                                        eksklusif{" "}
                                    </span>
                                </li>
                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-indigo-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>

                                    <span className="text-gray-700">
                                        {" "}
                                        Akses bersama untuk kelompok pengguna{" "}
                                    </span>                
                                </li>
                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-indigo-700"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>

                                    <span className="text-gray-700">
                                        {" "}
                                        Manajemen terintegrasi dengan mudah dan baik{" "}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PricingSection;
