"use client";

import { BrandsGrid } from "@/components/ui/brands";

const brands = [
    {
        name: "HTML",
        logo: "/skills/html5.svg",
    },
    {
        name: "CSS",
        logo: "/skills/css3.svg",
    },
    {
        name: "JavaScript",
        logo: "/skills/js.svg",
    },
    {
        name: "TypeScript",
        logo: "/skills/typescript.svg",
    },
    {
        name: "React",
        logo: "/skills/reactjs.svg",
    },
    {
        name: "TailwindCSS",
        logo: "/skills/tailwindcss.svg",
    },
    {
        name: "NextJS",
        logo: "/skills/nextjs.svg",
    },
    {
        name: "Express",
        logo: "/skills/Express.svg",
    },
    {
        name: "Prisma",
        logo: "/skills/prisma.svg",
    },
    {
        name: "MongoDB",
        logo: "/skills/mongodb.svg",
    },
    {
        name: "Mongoose",
        logo: "/skills/mongoose.svg",
    },
    {
        name: "Redux",
        logo: "/skills/redux.svg",
    },
    {
        name: "NodeJS",
        logo: "/skills/nodejs.svg",
    },
    {
        name: "AWS",
        logo: "/skills/aws.svg",
    },
    {
        name: "Firebase",
        logo: "/skills/firebase.svg",
    },
    {
        name: "Git",
        logo: "/skills/git.svg",
    },
    {
        name: "GitHub",
        logo: "/skills/github.svg",
    },
    {
        name: "pnpm",
        logo: "/skills/pnpm.svg",
    },
    {
        name: "Docker",
        logo: "/skills/docker.svg",
    },
    {
        name: "Appwrite",
        logo: "/skills/appwrite.svg",
    },
    {
        name: "Framer Motion",
        logo: "/skills/framer.svg",
    },
    {
        name: "Open AI",
        logo: "/skills/openai.svg",
    },
    {
        name: "PostgreSQL",
        logo: "/skills/postgresql.svg",
    },
    {
        name: "Postman",
        logo: "/skills/postman.svg",
    },
    {
        name: "Shadcn UI",
        logo: "/skills/shadcnui.svg",
    },
    {
        name: "Ubuntu",
        logo: "/skills/ubuntu.svg",
    },
    {
        name: "VS Code",
        logo: "/skills/vscode.svg",
    },
    {
        name: "WordPress",
        logo: "/skills/wordpress.svg",
    },
    {
        name: "Zod",
        logo: "/skills/zod.svg",
    },
];

export function TechStackGrid() {
    return (
        <BrandsGrid
            brands={brands}
            className="min-w-[800px]"
            title="My Tech Stack"
            // Optionally, you can override the default values:
            // columns={{
            //   default: 2,
            //   md: 3,
            //   lg: 6
            // }}
            // maxWidth={{
            //   container: "max-w-screen-xl",
            //   grid: {
            //     default: "max-w-xs",
            //     md: "max-w-lg",
            //     lg: "max-w-3xl"
            //   }
            // }}
        />
    );
}
