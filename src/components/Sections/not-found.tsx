"use client";
import FuzzyText from "@/components/ui/404text";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen w-full flex justify-center flex-col items-center">
            <FuzzyText baseIntensity={0.2} hoverIntensity={0.52} enableHover={true}>
                404 not found
            </FuzzyText>
            <p className="text-white mt-4 text-lg font-mono font-semibold w-full max-w-xl text-center mx-auto leading-relaxed">
                Pardon the inconvenience, but this page seems to be unavailable. Shall I direct you
                back to the
            </p>
            <button
                onClick={() => router.push("/")}
                className="rounded-lg items-center flex flex-col bg-cyan-200 text-lg font-semibold font-mono px-2 py-1"
            >
                home screen?
            </button>
        </div>
    );
};

export default NotFound;
