"use client";

import { useRouter } from "next/navigation";
import React from "react";

const PersonalContact = () => {
    const Router = useRouter();
    return (
        <div className="p-6 bg-white border rounded-lg">
            <div className="flex flex-row justify-between items-center">
                <button onClick={() => Router.back()}>Kembali</button>
                <button onClick={() => console.log()}>Simpan</button>
            </div>
            <h1 className="font-bold text-2xl mt-4">Data Pribadi</h1>
            <hr className="my-4" />
            <form className="flex flex-col">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-950"
                >
                    Email
                    <input
                        type="email"
                        placeholder="Elsam Rafi Saputra"
                        className="mt-1 block w-full placeholder-gray-400/70 placeholder:font-normal rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none"
                    />
                    <p className="mt-2 font-normal opacity-0 text-xs text-gray-400 dark:text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </label>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-950"
                >
                    Nomor ponsel
                    <input
                        type="email"
                        placeholder="Nama kota atau kabupaten"
                        className="mt-1 block w-full placeholder-gray-400/70 placeholder:font-normal rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none"
                    />
                    <p className="mt-2 font-normal opacity-0 text-xs text-gray-400 dark:text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </label>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-950"
                >
                    Nama orang terpercaya
                    <input
                        type="email"
                        placeholder=""
                        className="mt-1 block w-full placeholder-gray-400/70 placeholder:font-normal rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none"
                    />
                    <p className="mt-2 font-normal opacity-0 text-xs text-gray-400 dark:text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </label>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-950"
                >
                    Status orang tersebut dengan anda
                    <input
                        type="email"
                        placeholder=""
                        className="mt-1 block w-full placeholder-gray-400/70 placeholder:font-normal rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none"
                    />
                    <p className="mt-2 font-normal opacity-0 text-xs text-gray-400 dark:text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </label>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-950"
                >
                    Kontak yang dapat dihubungi
                    <input
                        type="email"
                        placeholder="SD Negeri 1 Buah Batu"
                        className="mt-1 block w-full placeholder-gray-400/70 placeholder:font-normal rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none"
                    />
                    <p className="mt-2 font-normal opacity-0 text-xs text-gray-400 dark:text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </label>
            </form>
        </div>
    );
};

export default PersonalContact;
