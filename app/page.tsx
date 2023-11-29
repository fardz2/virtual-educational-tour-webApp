import Image from "next/image";
import Navbar from "@/components/Navigation/Navbar";
import Button from "@/components/Button";
import Footer from "@/pages/Footer";

// Landing Page Before Authentication for Marketing
export default function Home() {
    return (
        <>
            <Navbar />

            {/* Hero Section Start */}
            <section className="min-h-screen bg-slate-50 pt-20">
                <h1>Hero Section</h1>
                <Button href="/dashboard" text="Ini props cuy" />
            </section>
            {/* Hero Section End */}

            {/* Feature Section Start */}
            <section className="min-h-screen bg-sky-50">
                <h1>Feature Section</h1>
            </section>
            {/* Feature Section End */}

            {/* Content List Section Start */}
            <section className="min-h-screen bg-red-50">
                <h1>Content Section</h1>
            </section>
            {/* Content List Section End */}

            {/* Benefit Section Start */}
            <section className="min-h-screen bg-green-50">
                <h1>Benefit Section</h1>
            </section>
            {/* Benefit Section End */}

            {/* Pricing Section Start */}
            <section>
                <h1>Pricing Section</h1>
            </section>
            {/* Pricing Section End */}

            {/* Footer Section Start */}
            <section>
                <Footer/>
            </section>
            {/* Footer Section End */}
        </>
    );
}
