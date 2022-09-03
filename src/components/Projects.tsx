import React, { useEffect } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "../styles/projects.module.css";

interface ProjectsProps {}

interface Project {
  name: string;
  description: string;
  techUsed: string[];
  githubLink: string;
  liveLink: string;
  image: string;
}

export const Projects: React.FC<ProjectsProps> = ({}) => {
  const { width, height } = useWindowDimensions();
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const x2 = useMotionValue(200);
  const y2 = useMotionValue(200);

  const rotateX = useTransform(y, [0, height!], [-45, 45]);
  const rotateY = useTransform(x, [0, width!], [45, -45]);

  const rotateX2 = useTransform(y, [0, height!], [15, -15]);
  const rotateY2 = useTransform(x, [0, width!], [-15, 15]);

  const handleMouse = (event: any) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
    x2.set(event.clientX - rect.left);
    y2.set(event.clientY - rect.top);
  };

  const projects: Project[] = [
    {
      name: "Plinko",
      description:
        "Inspired by stake.com's Plinko game, this project is built with React, using Framer Motion for game animations.",
      techUsed: ["React", "Vanila CSS", "Framer Motion"],
      githubLink: "https://github.com/kmallari/plinko",
      liveLink: "https://kmallari.github.io/plinko/",
      image: "/static/images/projects/plinko.webp",
    },
    {
      name: "typr",
      description:
        "typr is a typing speed test. It's a web app that allows users to test their typing speed. Heavy inspiration from monkeytype.com was used in crafting the website.",
      techUsed: ["React", "TypeScript", "NextJS", "Tailwind CSS", "AWS Lambda"],
      githubLink: "https://github.com/kmallari/typr-client",
      liveLink: "https://typr-client.vercel.app/",
      image: "/static/images/projects/typr.webp",
    },
    {
      name: "Personal Portfolio",
      description:
        "You're looking at it! This is where I showcase my skills and projects. I'm proud of the outcome of the website, especially when it comes to the aesthetics.",
      techUsed: [
        "React",
        "TypeScript",
        "NextJS",
        "Tailwind CSS",
        "Framer Motion",
      ],
      githubLink: "xx",
      liveLink: "kevmallari.com",
      image: "/static/images/projects/portfolio.webp",
    },
    {
      name: "Undergraduate Thesis",
      description: `We collected electroencephalographic (EEG) data from a Brain-Computer Interface and trained a neural network. The trained network was then used to control a prosthetic hand in real-time.

      The study was nominated as one, out of 21 studies in the department, to present in the Ateneo de Manila University School of Science and Engineering Student Research Symposium.`,
      techUsed: ["Python", "NumPy", "Pandas", "PyTorch", "mne"],
      githubLink: "",
      liveLink: "",
      image: "/static/images/projects/thesis.webp",
    },
    {
      name: "Sawwit",
      description:
        "A reddit clone created as part of my internship in Saperium. It has most of the foundational CRUD functionalities of reddit, including posting, upvoting, downvoting, and commenting.",
      techUsed: ["Angular", "ExpressJS", "MySQL", "Redis", "Socket.IO"],
      githubLink:
        "https://github.com/Saperium-Interns/interns-mini-apps/tree/main/Kevin-Mallari-Sawwit",
      liveLink: "",
      image: "xx",
    },
    {
      name: "YouPerium",
      description:
        "This is project where I worked with six other interns in the company. We created what is essentially a YouTube clone, with the foundational functionalities of the platform. Some features include video uploading, video listing, and a recommendation system.",
      techUsed: ["Angular", "ExpressJS", "MySQL", "AWS S3", "AWS Personalize"],
      githubLink: "https://github.com/Saperium-Interns/interns-major-apps",
      liveLink: "",
      image: "xx",
    },
    {
      name: "WNRS Online",
      description:
        "I adapted the We're Not Really Strangers (WNRS) card game and turned it into a virtual experience. The game is basically a question and answer game, and the website makes it so that everyone in the lobby can see the current card through the use of web sockets.",
      techUsed: ["React", "NextJS", "Supabase", "PostgreSQL"],
      githubLink: "",
      liveLink: "https://klu-wnrs.vercel.app/",
      image: "/static/images/projects/wnrs.webp",
    },
  ];

  return (
    <section
      id='projects'
      className='h-screen relative'
      onMouseMove={handleMouse}
    >
      <motion.div
        className='h-[90vh] w-[90vh] rounded-full absolute left-0 right-0 top-0 bottom-0 mx-auto my-auto'
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          background:
            "linear-gradient(-45deg, rgba(43,89,195,1) 0%, rgba(26,142,204,0) 50%, rgba(14,177,210,1) 100%);",
        }}
        animate={{
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
      ></motion.div>
      <motion.div
        className='h-screen mx-auto relative'
        style={{
          rotateX: rotateX2,
          rotateY: rotateY2,
        }}
      >
        {projects.map((project, index) => {
          console.log(project);
          const magnitude = Math.round(360 / projects.length);
          const angle = magnitude * index;
          const rotate = `rotate-[${angle}deg]`;
          const negRotate = `rotate-[${-angle}deg]`;
          return (
            <div
              className={`absolute h-[95vh] w-32 inset-0 my-auto mx-auto ${rotate}`}
              key={project.name}
            >
              <button
                className={`w-full h-32 rounded-full border-neutral-dark-200 border-4 text-center flex items-center justify-center whitespace-nowrap  hover:scale-110 transition-all ${negRotate}`}
              >
                <h6 className='text-xl font-azeret text-primary-200 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]'>
                  {project.name}
                </h6>
              </button>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};
