"use client";

import { ArrowLeft } from "@phosphor-icons/react";
import axios from "axios";
import { info } from "console";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type FormData = {
    nomor_ponsel: string | null;
    orang_terpercaya: string | null;
    status_orang_tersebut: string | null;
    yang_dapat_dihubungi: string | null;
};
const PersonalContact = () => {
    const router = useRouter();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<FormData>();
    const [infoUser, setInfoUser] = useState({
        email: "",
        nomor_ponsel: "",
        orang_terpercaya: "",
        status_orang_tersebut: "",
        yang_dapat_dihubungi: "",
    });
    const { data: session, status } = useSession();
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
            setInfoUser({
                email: response.data.data.email,
                nomor_ponsel: response.data.data.nomor_ponsel,
                orang_terpercaya: response.data.data.orang_terpercaya,
                status_orang_tersebut: response.data.data.status_orang_tersebut,
                yang_dapat_dihubungi: response.data.data.yang_dapat_dihubungi,
            });
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
                    onClick={() => router.back()}
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
            <h1 className="font-bold text-2xl mt-4">Kontak Pribadi</h1>
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
                        value={infoUser?.email}
                        disabled
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
                        type="number"
                        placeholder="Nama kota atau kabupaten"
                        className="mt-1 block w-full placeholder-gray-400/70 placeholder:font-normal rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none"
                        value={infoUser?.nomor_ponsel}
                        {...register("nomor_ponsel")}
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
                        type="text"
                        placeholder=""
                        className="mt-1 block w-full placeholder-gray-400/70 placeholder:font-normal rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none"
                        value={infoUser?.orang_terpercaya}
                        {...register("orang_terpercaya")}
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
                        type="text"
                        placeholder=""
                        className="mt-1 block w-full placeholder-gray-400/70 placeholder:font-normal rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none"
                        value={infoUser?.status_orang_tersebut}
                        {...register("status_orang_tersebut")}
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
                        type="number"
                        placeholder="SD Negeri 1 Buah Batu"
                        className="mt-1 block w-full placeholder-gray-400/70 placeholder:font-normal rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none"
                        value={infoUser?.yang_dapat_dihubungi}
                        {...register("yang_dapat_dihubungi")}
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
