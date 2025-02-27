"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import ThemeSwitcher from "../ui/themeswitcher";

export function Hero() {
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                  <ThemeSwitcher />
                <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                    Background lights are cool you know.
                </div>
                <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                    And this, is chemical burn.
                </div>
                <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
                    Debug now
                </button>
            </motion.div>
             {/* Fade to dark theme background */}
             <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-b from-transparent to-white dark:to-neutral-950"></div>
        </AuroraBackground>
    );
}
