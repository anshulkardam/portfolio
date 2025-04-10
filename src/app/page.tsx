"use client";
import MobileWarningPage from "@/components/blocks/mobileView";
import Aboutme from "@/components/Sections/Aboutme";
import { BackgroundBeamsCTA } from "@/components/Sections/contactme";
import Background from "@/components/Sections/Hero";
import HighlightTube from "@/components/Sections/HighlightTube";
import { TechStackGrid } from "@/components/Sections/icons";
import { Header } from "@/components/Sections/Navbar";
import { ProjectPlayer } from "@/components/Sections/ProjectsPlayer";
import { ExperienceTimeline } from "@/components/Sections/Timeline";
import { GradientText } from "@/components/ui/gradient-text";
import { useIsMobile } from "@/hooks/use-IsMobile";
import { useEffect, useState } from "react";

const page = () => {
    const isMobile = useIsMobile();
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;

    if (isMobile) {
        return <MobileWarningPage />;
    }

    return (
        <main>
            <Header />
            <section id="home">
                <Background />
            </section>
            <section id="about">
                <Aboutme />
            </section>
            <TechStackGrid />
            <section id="projects" className="scroll-mt-20">
                <h3 className="text-center text-lg font-rubik">FEATURED CASE STUDIES</h3>
                <h1 className="text-center text-4xl font-noto font-medium tracking-tighter md:text-5xl lg:text-5xl">
                    Curated <GradientText>work</GradientText>
                </h1>
            </section>
            <HighlightTube />
            <ProjectPlayer />
            <section id="work">
                <ExperienceTimeline />
            </section>
            <BackgroundBeamsCTA />
        </main>
    );
};

export default page;
//copied toclipbord
//fix hook click outside
