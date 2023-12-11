"use client"

import HidePasswordButton from "@/components/HidePasswordButton";
import errorsToRecord from "@hookform/resolvers/io-ts/dist/errorsToRecord.js";
import { ArrowLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React from "react";


const PasswordPage = () => {
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
            <h1 className="font-bold text-2xl mt-4">Kontak Pribadi</h1>
            <hr className="my-4" />
            <form className="flex flex-col gap-6">
                <HidePasswordButton label="Kata sandi sekarang" id="oldPassword" register={""} error={""}/>
                <HidePasswordButton label="Kata sandi baru" id="newPassword" register={""} error={""}/>
                <HidePasswordButton label="Konfirmasi kata sandi sekarang" id="confirmNewPassword" register={""} error={""}/>
            </form>
        </div>
    );
};

export default PasswordPage;
