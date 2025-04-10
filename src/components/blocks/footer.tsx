"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon, MailIcon } from "lucide-react";
import Link from "next/link";

interface FooterLink {
    name: string;
    Icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
    href?: string;
}

interface FooterColumn {
    title: string;
    links: FooterLink[];
}

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
    brand: {
        name: string;
        description: string;
    };
    columns: FooterColumn[];
    copyright?: string;
}

export const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
    ({ className, brand, columns, copyright, ...props }, ref) => {
        return (
            <div ref={ref} className={cn("pt-24", className)} {...props}>
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4 pr-4">
                            <a href="#" className="text-xl font-semibold">
                                {brand.name}
                            </a>
                            <p className="text-sm text-foreground/60">{brand.description}</p>
                        </div>

                        <div className="grid grid-cols-2 mt-16 md:grid-cols-7 lg:col-span-8 lg:mt-0">
                            {columns.map(({ title, links }) => (
                                <div key={title} className="last:mt-12 col-span-2 md:last:mt-0">
                                    <h3 className="text-sm font-semibold">{title}</h3>
                                    <ul className="mt-4 space-y-2.5">
                                        {links.map(({ name, Icon, href }) => (
                                            <li key={name}>
                                                <Link
                                                    href={href?? "/"}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm transition-all text-foreground/60 hover:text-foreground/90 group"
                                                >
                                                    <Icon className="inline stroke-2 h-4 mr-1.5 transition-all stroke-foreground/60 group-hover:stroke-foreground/90" />
                                                    {name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            <div className="col-span-3">
                                <p className="font-rubik mt-2 text-sm">
                                    Feel free to reach out to me for any inquiries or collaboration
                                    opportunities.
                                </p>
                                <div className="flex items-center text-blue-400 gap-3 mt-3">
                                    <MailIcon className="w-5 h-5" />
                                    <a
                                        href="mailto:anshulkardamsr@gmail.com"
                                        className="hover:underline"
                                    >
                                        anshulkardamsr@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {copyright && (
                        <div className="mt-20 text-center border-t pt-6 pb-0">
                            <p className="text-sm text-foreground/75">{copyright}</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
);

Footer.displayName = "Footer";
