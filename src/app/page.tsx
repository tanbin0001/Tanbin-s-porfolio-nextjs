import Card from "@/components/Card/Card";
import HeroSection from "@/components/HeroSection/HeroSection";
import { Nav } from "@/components/common/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-screen-xl   mx-auto">
      <Nav />
      <HeroSection />
    </div>
  );
}
