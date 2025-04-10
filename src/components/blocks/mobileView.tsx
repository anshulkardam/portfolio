"use client";

import { motion } from "framer-motion";
import { Smartphone, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "../ui/button-with-icon";

export default function MobileWarningPage() {
    return (
        <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center max-w-md bg-zinc-900 p-6 rounded-2xl shadow-2xl border border-zinc-800"
            >
                <div className="flex justify-center mb-4">
                    <Smartphone className="w-12 h-12 text-purple-400 animate-bounce" />
                </div>
                <h1 className="text-2xl font-semibold mb-2">Mobile View Not Supported Yet</h1>
                <p className="text-zinc-400 mb-4">
                    This site isn't optimized for phones yet. Please use a desktop browser for the
                    best experience.
                </p>
                <div className="flex justify-center text-yellow-400">
                    <AlertTriangle className="w-6 h-6 mr-2" />
                    <span>Mobile support coming very soon!</span>
                </div>
                <Button
                    variant="expandIcon"
                    className="font-medium font-inter bg-neutral-900 w-40 h-11 text-white hover:bg-white hover:text-black"
                    Icon={() => <ArrowRight className="h-4 w-4" />}
                    iconPlacement="right"
                >
                    Get Resume
                </Button>
            </motion.div>
        </main>
    );
}
