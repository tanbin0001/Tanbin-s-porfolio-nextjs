import AboutMe from "@/components/AboutMe/AboutMe";
import CustomCard from "@/components/Card/CustomCard";
import Experience from "@/components/Experience/Experience";

import HeroSection from "@/components/HeroSection/HeroSection";
import { Nav } from "@/components/common/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" mx-20  ">
      <Nav />
      <HeroSection />
      <AboutMe />
      <Experience />

    </div>
  );
}
