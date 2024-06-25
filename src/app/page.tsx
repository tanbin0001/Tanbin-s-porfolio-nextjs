import AboutMe from "@/components/AboutMe/AboutMe";
import CustomCard from "@/components/Card/CustomCard";
import Experience from "@/components/Experience/Experience";

import HeroSection from "@/components/HeroSection/HeroSection";
import { Projects } from "@/components/Projects/Projects";

import Technologies from "@/components/Technologies/Technologies";
import { Nav } from "@/components/common/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Nav />
      <HeroSection />
      <AboutMe />
      <Experience />
      <Technologies />
      <Projects />
    </div>
  );
}
