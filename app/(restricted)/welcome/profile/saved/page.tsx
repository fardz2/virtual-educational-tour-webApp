"use client"

import { useRouter } from "next/navigation";
import React from "react";

const SavedPage = () => {
    const Router = useRouter();
    return (
        <div className="p-6 bg-white border rounded-lg">
            <div className="flex flex-row justify-between items-center">
                <button onClick={() => Router.back()}>Kembali</button>
                <button onClick={() => console.log()}>Simpan</button>
            </div>
            <h1 className="font-bold text-2xl mt-4">Konten Tersimpan</h1>
            <hr className="my-4" />
        </div>
    );
};

export default SavedPage;
