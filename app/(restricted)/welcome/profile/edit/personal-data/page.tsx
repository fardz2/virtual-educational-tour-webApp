"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { ArrowLeft } from "@phosphor-icons/react";

const PersonalData = () => {
    const Router = useRouter();
    return (
        <div className="p-6 bg-white border rounded-lg">
            <div className="flex flex-row justify-between items-center">
                <button 
                    onClick={() => Router.back()}
                    className="flex flex-row gap-1 items-center justify-center"    
                >
                    <ArrowLeft size={20} className=""/>
                    <p className="font-medium text-gray-900">Kembali</p>
                </button>
                <button onClick={() => alert("berhasil disimpan")} className="px-4 py-1.5 text-gray-50 bg-blue-600">Simpan</button>
            </div>
            <h1 className="font-bold text-2xl mt-4">Data Pribadi</h1>
            <hr className="my-4" />
            <form className="flex flex-col">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-950"
                >
                    Nama lengkap
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
                    Jenis kelamin
                    <input
                        type="radio"
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
                    Tempat kelahiran
                    <input
                        type="email"
                        placeholder="Nama kota atau kabupaten"
                        className="mt-1 block w-full placeholder-gray-400/70 placeholder:font-normal rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none"
                    />
                    <p className="mt-2 font-normal opacity-0 text-xs text-gray-400 dark:text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </label>
                <div>
                    <label
                        htmlFor="Birthday"
                        className="block text-sm font-medium text-gray-950 "
                    >
                        Tanggal lahir
                    </label>

                    <input
                        type="date"
                        placeholder="John Doe"
                        className="block mt-2 w-min placeholder-gray-400/70 rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-500 text-sm my-6 focus:border-blue-400 focus:outline-none"
                    />
                </div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-950"
                >
                    Agama
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
                    Alamat tempat tinggal (sekarang)
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
                    Institusi pendidikan
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

export default PersonalData;
