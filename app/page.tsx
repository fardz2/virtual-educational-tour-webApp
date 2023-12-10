import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/pages/Footer";
import FeatureSection from "@/pages/FeatureSection";
import PricingSection from "@/pages/PricingSection";
import HeroSection from "@/pages/HeroSection";
import FaqSection from "@/pages/FaqSection";
import LastCTA from "@/pages/LastCTA";
import CarouselContentList from "@/components/CaraouselContentList";
// Landing Page Before Authentication for Marketing
export default function Home() {
    return (
        <>
            <Navbar />

            {/* Hero Section Start */}
            {/* dark mode butuh lebih gelap */}
            <section className="min-h-screen bg-gradient-to-tl dark:from-bluePrim dark:to-tealPrim dark:text-gray-50 text-gray-900 from-tealSec to-tertiary">
                <HeroSection />
            </section>
            {/* Hero Section End */}

            {/* Feature Section Start */}
            <section className="min-h-screen py-24 px-5 md:px-24">
                <FeatureSection />
            </section>
            {/* Feature Section End */}
            <section className="w-full bg-gray-100 h-min px-12 py-6">
                <h1 className="pt-6 pb-2 text-4xl font-bold text-gray-50 dark:text-gray-900 max-w-2xl">Dive into the heart of knowledge with our immersive educational tours.</h1>
                <p className="">Each tour is a curated journey, unlocking the secrets of historical landmarks, scientific marvels, and cultural wonders.</p>
                <CarouselContentList />
            </section>

            {/* Pricing Section Start */}
            {/* <section className="py-24">
                <PricingSection />
            </section> */}
            {/* Pricing Section End */}
            <FaqSection />
            <section className="flex justify-center items-center py-16 px-5 ">
                <LastCTA />
            </section>

            {/* Footer Section Start */}
            <section>
                <Footer />
            </section>
            {/* Footer Section End */}
        </>
    );
}
