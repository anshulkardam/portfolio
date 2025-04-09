"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";
import { FooterDemo } from "./Footer"; 
import { GradientText } from "../ui/gradient-text";

function BackgroundBeamsCTA() {
    return (
        <div className="h-[44rem] mt-12 w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-7xl mx-auto">
                <h1 className="relative z-10 text-lg md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold">
                    From Concept To Creation <br /> Let's Make It Happen!
                </h1>
                <p className="text-2xl mb-4 font-semibold font-noto pt-4 text-black dark:text-white text-center">
                    I'm <GradientText> available </GradientText> for full-time roles & freelance projects.
                </p>
                <p className="text-md bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-medium">
                    I thrive on crafting dynamic applications, and delivering seamless user
                    experiences.
                </p>
                <div className="flex justify-center">
                {/* <Input
                    type="email"
                    placeholder="hi@manuarora.in"
                    className=" mt-4 relative w-80 flex justify-center items-center z-10"
                /> */}
                </div>
                <FooterDemo />
            </div>
            <BackgroundBeams />
        </div>
    );
}

export { BackgroundBeamsCTA };
