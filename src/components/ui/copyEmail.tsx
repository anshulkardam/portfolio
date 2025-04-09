import React, { useState } from "react";
import { Copy, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CopyEmailProps {
    email: string;
}

const CopyEmail = ({ email }: CopyEmailProps) => {
    const [copied, setCopied] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const { toast } = useToast();

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(email);

            // Start animation
            setIsAnimating(true);
            setCopied(true);

            toast({
                title: "Copied to clipboard",
                description: `${email} has been copied to clipboard`,
            });

            // Reset the copied state after 2 seconds
            setTimeout(() => {
                setIsAnimating(false);
                setTimeout(() => {
                    setCopied(false);
                }, 300); // Wait for fade-out animation before resetting
            }, 1700);
        } catch (err) {
            console.error("Failed to copy: ", err);
            toast({
                title: "Failed to copy",
                description: "Please try again",
                variant: "destructive",
            });
        }
    };

    return (
        <div
            onClick={copyToClipboard}
            className="flex items-center justify-between gap-4 px-4 py-2 rounded-lg  shadow-sm hover:shadow-md transition-all cursor-pointer group relative overflow-hidden"
        >
            <div className="flex items-center gap-1 text-gray-500 group-hover:text-blue-500 transition-colors relative">
                {copied ? (
                    <div
                        className={`flex items-center gap-1 absolute inset-0 ${
                            isAnimating ? "animate-fade-in" : "animate-fade-out"
                        }`}
                    >
                        <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                ) : null}

                <div
                    className={`flex items-center gap-1 ${
                        copied
                            ? isAnimating
                                ? "animate-fade-out opacity-0"
                                : "animate-fade-in"
                            : ""
                    }`}
                >
                    <Copy className="h-5 w-5" />
                </div>
            </div>
            <div className="flex items-center text-lg font-medium font-inter" >
                <span className="text-muted-foreground">{email}</span>
            </div>

          
        </div>
    );
};

export default CopyEmail;
