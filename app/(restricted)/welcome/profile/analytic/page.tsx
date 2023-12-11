"use client"

import { ArrowLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React from "react";

const AnalytiicPage = () => {
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
            <h1 className="font-bold text-2xl mt-4">Dashboard Analitik</h1>
            <hr className="my-4" />
        </div>
    );
};

export default AnalytiicPage;
