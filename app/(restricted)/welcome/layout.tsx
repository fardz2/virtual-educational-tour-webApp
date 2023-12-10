import AppNavbar from "@/components/Navigation/AppNavbar";
import ForumSection from "@/pages/ForumSection";
import React from "react";

const WelcomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <main className="bg-white">
                <h1 className="w-full py-3 text-center bg-gradient-to-r dark:from-bluePrim dark:to-tealPrim from-tealSec to-tertiary dark:text-gray-50 text-gray-900">
                    Festival Promo Akhir Tahun 2023{" "}
                    <span className="dark:text-gray-50 text-gray-900 font-semibold underline">
                        #SemarakAkhirTahun!
                    </span>
                </h1>
                <AppNavbar/>
                <section className="min-h-screen grid md:gap-6 grid-cols-1 md:grid-cols-11 px-5 md:px-12">
                    <div className="md:col-span-8">
                        {children}
                    </div>
                    <div className="md:col-span-3">
                        <ForumSection />
                    </div>
                </section>

            </main>
        </>
    );
};

export default WelcomeLayout;
