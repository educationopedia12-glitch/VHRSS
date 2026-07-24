import Footer from "@/components/Footer";
import Activities from "@/components/HomePage/Activities";
import Hero from "@/components/HomePage/Hero";
import Join from "@/components/HomePage/Join";
import MissionGoal from "@/components/HomePage/MissionGoal";
import WhoWeAre from "@/components/HomePage/WhoWeAre";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
       <Hero />
        <WhoWeAre />
        <Activities />
        <MissionGoal />
        <Join />
        <Footer />
    </>
  );
}