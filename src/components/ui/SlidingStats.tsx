"use client";
import { useState, useEffect } from "react";
import ViewCountBar from "../Sections/ViewCountBar";

type Slide = {
    id: number;
    text: string;
    symbol: string;
    number: number;
};

const slides: Slide[] = [
    { id: 1, number: 8, symbol: "+", text: "projects I have worked on." },
    { id: 3, number: 90, symbol: "K", text: "90K total lines of code written" },
    { id: 4, number: 77, symbol: "L", text: "77 liters of coffee consumed" },
    { id: 5, number: 100, symbol: "+", text: "100+ bugs defeated" },
    { id: 6, number: 0, symbol: "", text: "Zero hours of sleep tracked" },
];

export default function AutoSlidingCarousel() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000); // Change slides every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center">
            {/* Slide Content */}
            <div className="w-72 h-72 flex flex-col items-center justify-center text-white text-center bg-black rounded-full border-2 border-white transition-all duration-500">
                <ViewCountBar
                    to={slides[currentIndex].number}
                    direction="up"
                    duration={2}
                    from={0}
                />
                <p className="text-2xl font-bold">{slides[currentIndex].text}</p>
            </div>

            {/* Dots Indicator */}
            <div className="flex mt-4 space-x-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`h-3 w-3 rounded-full transition-all ${
                            index === currentIndex ? "bg-white scale-110" : "bg-gray-500"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
