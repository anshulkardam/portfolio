"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Brand {
    name: string;
    logo: string;
}

interface BrandsGridProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    brands: Brand[];
    imageHeight?: number;
}

export const BrandsGrid = React.forwardRef<HTMLDivElement, BrandsGridProps>(
    (
        {
            className,
            title = "Trusted and loved by fast-growing companies worldwide",
            brands,
            imageHeight = 56, // 14 * 4 = 56px (h-14)
            ...props
        },
        ref
    ) => {
        return (
            <div ref={ref} className={cn("py-24", className)} {...props}>
                <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
                    {title && (
                        <div className="text-center mb-12 animate-fade-in">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                My Tech Stack
                            </h2>
                            <div className="w-16 h-1 bg-primary mx-auto mb-6 mt-2"></div>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Here are the technologies I work with to bring ideas to life.
                            </p>
                        </div>
                    )}
                    <div className="max-w-xs mx-auto grid grid-cols-2 items-center md:grid-cols-3 md:max-w-lg lg:grid-cols-10 lg:max-w-3xl">
                        {brands.map((brand) => (
                            <div key={brand.name} className="flex items-center justify-center p-4">
                                <div className="relative h-[28px] w-full">
                                    <Image
                                        src={brand.logo}
                                        alt={`${brand.name} logo`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
);

BrandsGrid.displayName = "BrandsGrid";
