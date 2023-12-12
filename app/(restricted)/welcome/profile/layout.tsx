"use client";

import AppNavbar from "@/components/Navigation/AppNavbar";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    const pathNameNow = usePathname();

    const { data: session, status } = useSession();

    // const user =  getServerSession()

    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`bg-gray-50 `}>
                <AppNavbar />
                <section className="grid grid-cols-1 md:grid-cols-5 w-full px-5 md:px-12 gap-6">
                    <div className="md:col-span-2 hidden md:flex flex-col gap-4 mt-12">
                        <div className="bg-white flex flex-row gap-4 rounded-lg border p-4 items-center">
                            <Image
                                alt=""
                                src={"/next.svg"}
                                width={100}
                                height={100}
                                className="rounded-full bg-slate-100 aspect-square scale-75"
                            />
                            <div className="flex flex-col">
                                <h1 className="text-xl font-bold">
                                    {session?.user.name}
                                </h1>
                                <p className="text-gray-600 font-normal">
                                    Mahasiswa
                                </p>
                                <p className="text-gray-600 font-normal">
                                    Univeristas Telkom
                                </p>
                            </div>
                        </div>
                        <ul className="flex flex-col rounded-lg border">
                            <li className="bg-white px-4 py-3 rounded-t-lg hover:bg-gray-100">
                                <Link
                                    href={`/welcome/profile`}
                                    className="font-medium"
                                >
                                    Profil Akun
                                </Link>
                            </li>
                            <li className="bg-white px-4 py-3 hover:bg-gray-100">
                                <Link
                                    href={`/welcome/profile/analytic`}
                                    className="font-medium"
                                >
                                    Analisis Saya
                                </Link>
                            </li>
                            <li className="bg-white px-4 py-3 hover:bg-gray-100">
                                <Link
                                    href={`/welcome/profile/saved`}
                                    className="font-medium"
                                >
                                    Konten Tersimpan
                                </Link>
                            </li>
                            <li className="bg-white px-4 py-3 hover:bg-gray-100">
                                <Link
                                    href={`/welcome/profile/edit/password`}
                                    className="font-medium"
                                >
                                    Ganti Kata Sandi
                                </Link>
                            </li>
                            <li className="w-full bg-white px-4 py-3 rounded-b-lg hover:bg-gray-100">
                                <Link
                                    href={"/"}
                                    className="w-full text-red-600 font-medium"
                                >
                                    Log Out
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-3 mt-12">{children}</div>
                </section>
            </body>
        </html>
    );
};

export default ProfileLayout;
