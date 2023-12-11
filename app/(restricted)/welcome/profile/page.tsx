"use client";

import { Info } from "@phosphor-icons/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const ProfilePage = () => {
    const { data: session } = useSession()

    return (
        <>
            <div className="rounded-lg bg-white py-6 border">
                <section className="px-6 pb-6">
                    <nav aria-label="Breadcrumb">
                        <h1 className="font-bold text-2xl">Pengaturan Akun</h1>
                    </nav>
                </section>
                <hr />
                <section>
                    <div className="bg-gray-100 py-4 px-4 m-6 rounded flex flex-row justify-start items-start gap-2">
                        <Info size={40} className="text-gray-900 "/>
                        <p className="text-gray-900 py-2">
                            Personalisasi perjalanan edukasi Anda di EduVenturer
                            dengan mengelola pengaturan profil Anda untuk
                            mendapatkan pengalaman pembelajaran yang optimal
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 px-6">
                        <Link
                            href={"/welcome/profile/edit/personal-data"}
                            className="font-medium"
                        >
                            Data Pribadi
                        </Link>
                        <Link
                            href={"/welcome/profile/edit/personal-contact"}
                            className="font-medium"
                        >
                            Kontak Pribadi
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ProfilePage;
