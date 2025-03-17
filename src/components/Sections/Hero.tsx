"use client";
import { AuroraBackground } from "@/components/ui/Aurora";
import { motion } from "framer-motion";
import React from "react";
import ProfileCard from "./ProfileCard";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { CopyButton } from "../ui/copy-button";

export default function Background() {
    return (
        <AuroraBackground>
            <div className="flex w-full justify-around">
                <motion.div
                    initial={{ opacity: 0.0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                        Anshul Kardam
                    </div>
                    <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                        Full Stack Developer
                    </div>

                    <InteractiveHoverButton text="Contact" className="w-40" />
                </motion.div>
               
                <ProfileCard />
            </div>
        </AuroraBackground>
    );
}
