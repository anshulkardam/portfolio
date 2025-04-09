"use client"

import React from "react"
import { XIcon } from "lucide-react"
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
} from "@/components/ui/morphing-dialog"

type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

const PROJECTS: Project[] = [
  {
    name: 'Tirth.co',
    description:
      'From temples to puja, We make every step Effortless.',
    link: 'https://www.tirth.co/',
    video:
      'https://res.cloudinary.com/du9f90ci8/video/upload/v1744226642/lg8hr3tiuob7ilieiji2.webm',
    id: 'project1',
  },
  {
    name: 'Skippit!',
    description: 'Delegate Tasks and Enjoy a hassle free life!',
    link: '',
    video:
      'https://res.cloudinary.com/du9f90ci8/video/upload/v1744228459/Record_2025-04-10-01-21-56_qqgcjv.mp4',
    id: 'project2',
  },
 
]

function ProjectVideo({ src }: { src: string }) {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function ProjectPlayer() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center bg-white p-8 dark:bg-black">
      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <div key={project.name} className="space-y-2">
            <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
              <ProjectVideo src={project.video} />
            </div>
            <div className="px-1">
              <a
                className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
                <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
              </a>
              <p className="text-base text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { ProjectPlayer }