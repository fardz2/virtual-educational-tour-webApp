import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/pages/Footer";
import FeatureSection from "@/pages/FeatureSection";
import PricingSection from "@/pages/PricingSection";
import HeroSection from "@/pages/HeroSection";
import FaqSection from "@/pages/FaqSection";
// Landing Page Before Authentication for Marketing
export default function Home() {
    return (
        <>
            <Navbar />

            {/* Hero Section Start */}
            {/* dark mode butuh lebih gelap */}
            <section className="min-h-screen bg-gradient-to-tl from-blueSec to-blueTer dark:bg-gradient-to-br dark:from-bluePrim dark:to-purpleSec dark:text-slate-50">
                <HeroSection />
            </section>
            {/* Hero Section End */}

            {/* Feature Section Start */}
            <section className="min-h-screen py-24 px-5 md:px-24">
                <FeatureSection />
            </section>
            {/* Feature Section End */}

            {/* Content List Section Start */}
            {/* <section className="min-h-screen relative ">
                <ContentListSection />
            </section> */}
            {/* Content List Section End */}

            {/* Pricing Section Start */}
            <section className="py-24">
                <PricingSection />
            </section>
            {/* Pricing Section End */}
            <FaqSection />
            {/* Footer Section Start */}
            <section>
                <Footer />
            </section>
            {/* Footer Section End */}
        </>
    );
}
