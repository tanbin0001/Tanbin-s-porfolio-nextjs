import AboutMe from "@/components/AboutMe/AboutMe";
import CustomCard from "@/components/Card/CustomCard";
import ContactMe from "@/components/ContactMe/ContactMe";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";

import HeroSection from "@/components/HeroSection/HeroSection";
import { Projects } from "@/components/Projects/Projects";

import Technologies from "@/components/Technologies/Technologies";
import { Nav } from "@/components/common/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="dark  max-w-[1400px] mx-auto">
      <Nav />
      <HeroSection />
      <AboutMe />
      <Experience />
      <Technologies />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}
