import Aboutme from "@/components/Sections/Aboutme";
import { BackgroundBeamsCTA } from "@/components/Sections/contactme";
import Background from "@/components/Sections/Hero";
import HighlightTube from "@/components/Sections/HighlightTube";
import { TechStackGrid } from "@/components/Sections/icons";
import { Header } from "@/components/Sections/Navbar";
import { ProjectPlayer } from "@/components/Sections/ProjectsPlayer";
import { ExperienceTimeline } from "@/components/Sections/Timeline";
import { CopyButton } from "@/components/ui/copy-button";

const page = () => {
    return (
        <div>
            <Header />
            <Background />
            <div className="flex gap-4">
                <div className="font-extralight text-base text-white py-4">
                    anshulkardamsr@gmail.com
                </div>
                <CopyButton value="anshulkardamsr@gmail.com" />
            </div>
            <Aboutme />
            <TechStackGrid />
            <HighlightTube />
            <ProjectPlayer />
            <ExperienceTimeline />
            <BackgroundBeamsCTA />
        </div>
    );
};

export default page;
//copied toclipbord
//fix hook click outside
