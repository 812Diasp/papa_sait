import React from "react";
import HeroSection from "@app/components/main/herosection/heroSection";
import ServiceSection from "@app/components/main/servicesection/serviceSection";
import VideoSection from "@app/components/main/videoSection/videoSection";
import ProjectGallery from "@app/components/main/projectGallery/projectGallery";
import Insprite from "@app/components/main/inspire/insprite";
import PriceList from "@app/components/main/priceList/priceList";
import AdvantagesSection from "@app/components/main/advantages/andvantagesSection";
import FloatingPhoneCTA from '@app/components/main/FloatingPhoneCTA/FloatingPhoneCTA';

export default function Home() {
    return (
        <div>
            <HeroSection />
            <ServiceSection />
            <VideoSection />
            <ProjectGallery />
            <Insprite />
            <PriceList />
            <AdvantagesSection />
            <FloatingPhoneCTA />
        </div>
    );
}