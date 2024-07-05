

import AboutMe from "@/components/AboutMe/AboutMe";
import ContactMe from "@/components/ContactMe/ContactMe";
import Experience from "@/components/Experience/Experience";
import HeroSection from "@/components/HeroSection/HeroSection";
import { Projects } from "@/components/Projects/Projects";
import RecentlyPublished from "@/components/RecentlyPublished/RecentlyPublished";
import Technologies from "@/components/Technologies/Technologies";
import { Container } from "@mui/material";



const HomePage = () => {
    return (
        <Container>


            <HeroSection />
            <AboutMe />
            <Experience />
            <Technologies />
            <Projects />
            <RecentlyPublished />
            <ContactMe />
        </Container>
    );
};

export default HomePage;
