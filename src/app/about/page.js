import CoreValues from "@/components/About/CoreValues";
import HeroAbout from "@/components/About/HeroAbout";
import ImagesGallery from "@/components/About/ImagesGallery";
import Story from "@/components/About/Story";
import WhatWeDo from "@/components/About/WhatWeDo";
import Footer from "@/components/Footer";
import MissionGoal from "@/components/HomePage/MissionGoal";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <HeroAbout />
      <Story />
      <WhatWeDo />
      <ImagesGallery />
      <MissionGoal />
      <CoreValues />
      <Footer />
    </>
  );
}