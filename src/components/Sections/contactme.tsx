"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";
import { FooterDemo } from "./Footer";
import WaitlistFormAnimation from "../ui/FormAnimationButton";

function BackgroundBeamsCTA() {
    return (
        <div className="h-[42rem] mt-12 w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-6xl mx-auto">
                <h1 className="relative z-10 text-lg md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold">
                    From Concept To Creation <br /> Let's Make It Happen!
                </h1>
                <p  className="text-lg bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-semibold">I'm available for full-time roles & freelance projects.</p>
                <p className="text-lg bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-semibold">
                    I thrive on crafting dynamic web applications, and delivering seamless user
                    experiences.
                </p>
                <Input
                    type="email"
                    placeholder="hi@manuarora.in"
                    className=" mt-4 relative w-80 flex justify-center items-center z-10"
                />

                <FooterDemo />
            </div>
            <BackgroundBeams />
        </div>
    );
}

export { BackgroundBeamsCTA };
