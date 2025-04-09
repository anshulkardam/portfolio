import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProfileCard from "./ProfileCard";

const AboutMe = () => {
    return (
        <section className="py-10 flex justify-center items-center">
            <div className="max-w-7xl">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="flex-1 space-y-6 animate-fade-in">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            About Me
                        </h2>
                        <div className="w-16 h-1 bg-primary"></div>
                        <p className="text-muted-foreground text-lg">
                            Hi, I'm Anshul Kardam – a passionate full stack and app developer. I
                            work with modern tools like TypeScript, React, Next.js, and Node.js.
                            With over a year of experience, I focus on building fast, responsive,
                            and user-friendly websites and apps.
                        </p>
                        <p className="text-muted-foreground text-lg">
                            I truly enjoy what I do and believe that every day is a chance to learn
                            something new. I'm always excited to grow and improve my skills.
                        </p>
                        <div className="flex gap-4 pt-6">
                            <Button className="group">
                                View My Work
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <a href="mailto:anshulkardamsr@gmail.com">
                                <Button
                                    variant="outline"
                                    className="border-white/10 hover:bg-white/5"
                                >
                                    Contact Me
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className=" animate-slide-in">
                        <ProfileCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
