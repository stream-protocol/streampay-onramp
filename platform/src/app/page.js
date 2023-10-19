import React from "react";
import Image from "next/image";
import Script from "next/script";

// Components
import Navbar from "./components/HomePageLayout/Navbar";
import Footer from "./components/HomePageLayout/Footer";
import LandingHeroForm from "./components/Forms/LandingHeroForm";
import YouInMind from "./components/HomePageComponents/YouInMind";
import Integrations from "./components/HomePageComponents/Integrations";
import CTA from "./components/HomePageComponents/CTA";
import Pricing from "./components/HomePageComponents/Pricing";

export default function Home() {
    const HeroSection = () => (
        <div className="bg-[#F1F3f5] py-20 hero relative">
            <div className="container mx-auto max-w-7xl z-20">
                <div className="flex flex-col items-center justify-center gap-x-5 gap-y-12">
                    <div className="text-center container max-w-3xl mx-auto">
                        <h1 className="text-5xl font-bold text-[#111827]">
                            Checkout with StreamPay™
                        </h1>
                        <p className="mt-5 text-base text-[#3F3F3F]">
                            Seamlessly accept cryptocurrency payments from non-crypto users for your business, ensuring a smooth and hassle-free transaction experience.
                            <br />
                        </p>
                    </div>
                    <div className="w-full max-w-3xl mx-auto z-20 bg-white">
                        <div className="pricing_box py-4 px-3 text-[#474545] rounded-lg border border-[#EFEFEF] z-20">
                            <div className="py-2 px-4 w-full z-20">
                                <LandingHeroForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full block absolute top-0 left-0 pointer-events-none">
                <Image src="/images/MinimalPattern.png" fill className="w-full h-full object-cover" alt="Minimal pattern background" />
            </div>
        </div>
    );

    return (
        <>
            <Script src="popup.js" strategy="afterInteractive" />
            <Navbar />
            <main>
                <HeroSection />
                <YouInMind />
                <Pricing />
                <Integrations />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
