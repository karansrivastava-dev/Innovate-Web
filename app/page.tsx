import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MissionVision from "@/components/MissionVision";
import LogoStrip from "@/components/LogoStrip";
import Experience from "@/components/Experience";
import UpcomingEvents from "@/components/UpcomingEvents";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <MissionVision />
      <LogoStrip />
      <Experience />
      <UpcomingEvents />
      <Gallery />
      <Footer />
    </>
  );
}