"use client"

import AppNavbar from "@/components/Navigation/AppNavbar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    const pathNameNow = usePathname();
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`bg-gray-50 `}>
                <AppNavbar/>
                <section className="grid grid-cols-5 w-full px-5 md:px-12 gap-6">
                    <div className="col-span-2 flex flex-col gap-4 mt-12">
                        <div className="bg-white flex flex-row gap-4 rounded-lg border p-4">
                            <Image
                                alt=""
                                src={"/next.svg"}
                                width={100}
                                height={100}
                            />
                            <div className="flex flex-col">
                                <h1 className="text-xl font-bold">Elsam Rafi Saputra</h1>
                                <p className="text-gray-600 font-normal">Mahasiswa</p>
                                <p className="text-gray-600 font-normal">Univeristas Telkom</p>
                            </div>
                        </div>
                        <ul className="flex flex-col rounded-lg border">
                            <li className="bg-white px-4 py-3 rounded-t-lg ">
                                <Link href={`${pathNameNow}`}>Profile</Link>
                            </li>
                            <li className="bg-white px-4 py-3">
                                <Link href={`${pathNameNow}/dashboard`}>
                                    My Analytic
                                </Link>
                            </li>
                            <li className="bg-white px-4 py-3">
                                <Link href={`${pathNameNow}/saved-forum`}>
                                    Saved Forum
                                </Link>
                            </li>
                            <li className="w-full bg-white px-4 py-3 rounded-b-lg">
                                <Link href={"/"} className="w-full">
                                    Log Out
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-3 mt-12">{children}</div>
                </section>
            </body>
        </html>
    );
};

export default ProfileLayout;
