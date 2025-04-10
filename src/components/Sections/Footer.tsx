"use client";

import { Blocks, CodeXml, CreditCard, Github, Linkedin, Twitter, Webhook } from "lucide-react";
import { Footer } from "@/components/blocks/footer";

export function FooterDemo() {
    return (
        <Footer
            className="mt-10 relative z-50"
            brand={{
                name: "Anshul Kardam",
                description:
                    "Help you create experiences where aesthetics & functionality seamlessly come together.",
            }}
            columns={[
                {
                    title: "General",
                    links: [
                        {
                            name: "About",
                            Icon: Blocks,
                            href: "#about",
                        },
                        {
                            name: "Projects",
                            Icon: CreditCard,
                            href: "#projects",
                        },
                        {
                            name: "Work",
                            Icon: Webhook,
                            href: "#work",
                        },
                        {
                            name: "Contact",
                            Icon: CodeXml,
                            href: "#about",
                        },
                    ],
                },
                {
                    title: "Links",
                    links: [
                        {
                            name: "LinkedIn",
                            Icon: Linkedin,
                            href: "https://www.linkedin.com/in/anshulkardam/",
                        },
                        {
                            name: "Github",
                            Icon: Github,
                            href: "https://github.com/anshulkardam",
                        },
                        {
                            name: "Twitter",
                            Icon: Twitter,
                            href: "https://x.com/anshulkardam_",
                        },
                        {
                            name: "Hashnode",
                            Icon: Webhook,
                            href: "/",
                        },
                    ],
                },
            ]}
            copyright="Copyright © 2025 Anshul Kardam. All rights reserved."
        />
    );
}
