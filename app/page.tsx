import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/pages/Footer";
import FeatureSection from "@/pages/FeatureSection";
import ContentListSection from "@/pages/ContentListSection";
import PricingSection from "@/pages/PricingSection";
import BenefitSection from "@/pages/BenefitSection";
import HeroSection from "@/pages/HeroSection";
// Landing Page Before Authentication for Marketing
export default function Home() {
    return (
        <>
            <Navbar />

            {/* Hero Section Start */}
            <section className="min-h-screen bg-gradient-to-tl from-blue-600 to-teal-100 to-90%">
                <HeroSection />
            </section>
            {/* Hero Section End */}

            {/* Feature Section Start */}
            <section className="min-h-screen py-24 px-5 md:px-24">
                <FeatureSection />
            </section>
            {/* Feature Section End */}

            {/* Content List Section Start */}
            <section className="min-h-screen ">
                <ContentListSection />
            </section>
            {/* Content List Section End */}

            {/* Benefit Section Start */}
            <section className="min-h-screen pt-24 px-5 md:px-24">
                <BenefitSection />
            </section>
            {/* Benefit Section End */}

            {/* Pricing Section Start */}
            <section className="py-24">
                <PricingSection />
            </section>
            {/* Pricing Section End */}

            {/* Footer Section Start */}
            <section>
                <Footer />
            </section>
            {/* Footer Section End */}
        </>
    );
}
