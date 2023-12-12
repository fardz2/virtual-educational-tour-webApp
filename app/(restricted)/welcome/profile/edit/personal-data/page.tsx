"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ArrowLeft } from "@phosphor-icons/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
type FormData = {
    nama_lengkap: string | null;
    tempat_kelahiran: string | null;
    tanggal_lahir: string | null;
    agama: string | null;
    alamat_tempat_tinggal_sekarang: string | null;
    pendidikan: string | null;
};
const PersonalData = () => {
    const Router = useRouter();
    const [infoUser, setInfoUser] = useState({
        nama_lengkap: "",
        tempat_kelahiran: "",
        tanggal_lahir: "",
        agama: "",
        alamat_tempat_tinggal_sekarang: "",
        pendidikan: "",
    });
    const { data: session, status } = useSession();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<FormData>();
    useEffect(() => {
        if (status == "authenticated") {
            getInfoUser();
        }
    }, [status, infoUser]);

    const getInfoUser = async () => {
        try {
            const headers = {
                Authorization: `Bearer ${session?.user.accessToken}`,
            };
            const response = await axios.get(
                "https://virtual-educational-vr-api-production.up.railway.app/api/info",
                {
                    headers,
                },
            );
            console.log(response.data.data);
            setInfoUser(response.data.data);
        } catch (error: any) {
            if (error.response.data.status == 404) {
                return alert(error.response.data.message);
            } else {
                return alert(error.response.data.errors.email);
            }
        }
    };
    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            const headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${session?.user.accessToken}`,
            };
            const jsonData = JSON.stringify(data);
            console.log(jsonData);
            await axios.put(
                `https://virtual-educational-vr-api-production.up.railway.app/api/edit-info`,
                jsonData,
                {
                    headers,
                },
            );
            getInfoUser();
        } catch (error: any) {
            console.log(error);
        }
    };
    return (
        <div className="p-6 bg-white border rounded-lg">
            <div className="flex flex-row justify-between items-center">
                <button
                    onClick={() => Router.back()}
                    className="flex flex-row gap-1 items-center justify-center"
                >
                    <ArrowLeft size={20} className="" />
                    <p className="font-medium text-gray-900">Kembali</p>
                </button>
                <input
                    type="submit"
                    className="px-4 py-1.5 text-gray-50 bg-blue-600"
                    onClick={handleSubmit(onSubmit)}
                />
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
                        type="text"
                        placeholder="Elsam Rafi Saputra"
                        className="mt-1 block w-full placeholder-gray-400/70 placeholder:font-normal rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none"
                        value={infoUser?.nama_lengkap}
                        {...register("nama_lengkap")}
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
                        type="text"
                        placeholder="Nama kota atau kabupaten"
                        className="mt-1 block w-full placeholder-gray-400/70 placeholder:font-normal rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none"
                        value={infoUser?.tempat_kelahiran}
                        {...register("tempat_kelahiran")}
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
                        value={infoUser?.tanggal_lahir}
                        {...register("tanggal_lahir")}
                    />
                </div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-950"
                >
                    Agama
                    <input
                        type="text"
                        placeholder=""
                        className="mt-1 block w-full placeholder-gray-400/70 placeholder:font-normal rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none"
                        value={infoUser?.agama}
                        {...register("agama")}
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
                        type="text"
                        placeholder=""
                        className="mt-1 block w-full placeholder-gray-400/70 placeholder:font-normal rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none"
                        value={infoUser.alamat_tempat_tinggal_sekarang}
                        {...register("alamat_tempat_tinggal_sekarang")}
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
                        value={infoUser.pendidikan}
                        {...register("pendidikan")}
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
