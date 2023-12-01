import PricingCard from "@/components/PricingCard";
import React from "react";
import TogglePricing from "@/components/TogglePricing";

const PricingSection = () => {
    return (
        <>
            <section>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-5xl font-bold">Pricing Section</h1>
                    <p className="my-4 text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Et, consequuntur.
                    </p>
                    <TogglePricing />
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
                    <PricingCard favorit={false} />
                    <PricingCard favorit={true} />
                    <PricingCard favorit={false} />
                </div>
            </section>
        </>
    );
};

export default PricingSection;
