"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const WaitlistFormAnimation = () => {
    const [status, setStatus] = useState<"loading" | "joined" | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (status !== "loading" && status !== "joined") {
            setStatus("loading");
        }

        setTimeout(() => {
            setStatus("joined");
        }, 3000);

        const formData = new FormData(event.currentTarget);
        console.log(formData.get("email"));
    };

    return (
        <div className="w-full max-w-md space-y-2 md:space-y-4">
            <form
                onSubmit={handleSubmit}
                className="w-full border shadow-sm p-1 md:p-1.5 rounded-2xl flex items-center justify-between bg-white ring-1 ring-transparent hover:ring-4 hover:ring-gray-200 hover:shadow-lg hover:border-gray-400 duration-300"
            >
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className={twMerge(
                        "outline-none bg-transparent font-medium overflow-hidden flex-1",
                        status === "loading" || status === "joined"
                            ? "w-0 opacity-0"
                            : "w-full pl-2"
                    )}
                    required
                />
                <motion.button
                    initial={false}
                    animate={{
                        width: status === "loading" || status === "joined" ? "100%" : "40%",
                    }}
                    type="submit"
                    className={twMerge(
                        "text-sm md:text-lg text-white font-medium py-2 md:py-2.5 rounded-xl duration-500 disabled:cursor-not-allowed",
                        status === "joined" ? "bg-green-600" : "bg-black"
                    )}
                    disabled={status === "loading"}
                >
                    <AnimatePresence mode="wait">
                        {status === "loading" ? (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0, y: -12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 12 }}
                                className="flex items-center justify-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="animate-spin opacity-80 size-5 md:size-7"
                                >
                                    <path d="M12 2v4" />
                                    <path d="m16.2 7.8 2.9-2.9" />
                                    <path d="M18 12h4" />
                                    <path d="m16.2 16.2 2.9 2.9" />
                                    <path d="M12 18v4" />
                                    <path d="m4.9 19.1 2.9-2.9" />
                                    <path d="M2 12h4" />
                                    <path d="m4.9 4.9 2.9 2.9" />
                                </svg>
                            </motion.div>
                        ) : status === "joined" ? (
                            <motion.p
                                key="joined"
                                initial={{ opacity: 0, y: -12 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                Successfully Joined
                            </motion.p>
                        ) : (
                            <>
                                <motion.p
                                    key="join"
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, y: 12 }}
                                >
                                    Join <span className="hidden md:inline-block">waitlist</span>
                                </motion.p>
                            </>
                        )}
                    </AnimatePresence>
                </motion.button>
            </form>

            <AnimatePresence mode="wait">
                {status === "joined" ? (
                    <motion.p
                        key="joined"
                        initial={{ opacity: 0, y: -12, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        className="text-gray-500 font-medium text-sm"
                    >
                        Check your inbox to confirm the email!
                    </motion.p>
                ) : (
                    <motion.p
                        key="join"
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: 12, filter: "blur(10px)" }}
                        className="text-gray-500 font-medium text-sm"
                    >
                        Don&apos;t want to wait? Join our waitlist
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
};

export default WaitlistFormAnimation;
