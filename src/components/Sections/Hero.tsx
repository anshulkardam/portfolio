"use client";
import { AuroraBackground } from "@/components/ui/Aurora";
import { motion } from "framer-motion";
import React from "react";
import CopyEmail from "../ui/copyEmail";
import { Button } from "../ui/button-with-icon";
import { ArrowRight } from "lucide-react";
import AnimatedWordCycle from "../ui/animated-text-cycle";

export default function Background() {
    return (
        <AuroraBackground>
            <div className="relative">
                <motion.div
                    style={{ zIndex: 10 }}
                    initial={{ opacity: 0.0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative max-w-screen-2xl flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div className="text-3xl md:text-6xl font-oxanium font-semibold dark:text-white text-center">
                        Transforming startup ideas into robust web experiences—code to deployment.
                    </div>
                    <div className="font-rubik text-base md:text-4xl dark:text-neutral-200 py-4 ">
                        <span> Hello, I'm Anshul Kardam - A </span>
                        <AnimatedWordCycle
                            words={["Full Stack ", "Nextjs ", "Mobile App ", "Backend "]}
                            interval={3000}
                            className={"text-foreground font-semi-bold"}
                        />
                        <span> Developer</span>
                    </div>
                </motion.div>
                <div className="flex justify-center w-full mt-6">
                    <motion.div
                        style={{ zIndex: 50 }}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 1.0,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="flex gap-4"
                    >
                        <Button
                            variant="expandIcon"
                            className="font-medium font-inter bg-neutral-900 w-40 h-11 text-white hover:bg-white hover:text-black"
                            Icon={() => <ArrowRight className="h-4 w-4" />}
                            iconPlacement="right"
                        >
                            Get Resume
                        </Button>
                        <CopyEmail email="anshulkardamsr@gmail.com" />
                    </motion.div>
                </div>
            </div>
        </AuroraBackground>
    );
}
