import Image from "next/image";
import HeroSection from "@/app/components/main/herosection/heroSection";
import ServiceSection from "@/app/components/main/servicesection/serviceSection";
import Navbar from "@/app/components/main/navbar/navbar";
import IntroVideoSection from "@/app/components/main/videoSection/videoSection";
import ProjectGallery from "@/app/components/main/projectGallery/projectGallery";
import PriceList from "@/app/components/main/priceList/priceList";
import AdvantagesSection from "@/app/components/main/advantages/andvantagesSection";
import FloatingPhoneCTA from "@/app/components/main/FloatingPhoneCTA/FloatingPhoneCTA";
import React from "react";
import Insprite from "@/app/components/main/inspire/insprite";

export default function Home() {
  return (
    <div>

    <HeroSection></HeroSection>
      <ServiceSection></ServiceSection>
      <IntroVideoSection></IntroVideoSection>

      <ProjectGallery></ProjectGallery>


     <Insprite></Insprite>
      <PriceList></PriceList>

      <AdvantagesSection></AdvantagesSection>
      <FloatingPhoneCTA />

    </div>
  );
}
