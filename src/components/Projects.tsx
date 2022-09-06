import React, { useState, useEffect } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { ProjectSidebar } from "./ProjectSidebar";
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

  const [widthState, setWidthState] = useState<number | null>(null);
  const [heightState, setHeightState] = useState<number | null>(null);

  useEffect(() => {
    setWidthState(width);
    setHeightState(height);
  }, []);

  useEffect(() => {
    setWidthState(width!);
  }, [width]);

  useEffect(() => {
    setHeightState(height!);
  }, [height]);

  console.log(
    widthState,
    heightState,
    widthState !== null && heightState !== null && widthState < heightState
  );

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
        "This repository contains a Plinko game inspired by Stake.com's own Plinko game. Since this version is not meant to be used for real gambling, the user can set their own balance to start playing the game.\n\nSome of the website's features include easy bet modification, editable row and risk, manual and automatic mode, and error catching.",
      techUsed: ["React", "Vanila CSS", "Framer Motion"],
      githubLink: "https://github.com/kmallari/plinko",
      liveLink: "https://kmallari.github.io/plinko/",
      image: "/static/images/projects/plinko.webp",
    },
    {
      name: "typr",
      description:
        "typr. is a minimalistic typing test website, inspired by monkeytype.com. The typing test allows you to see what you are currently typing and the words that need to be typed in a compact interface. It also provides you the choice on how long you want to do the test.\n\nSome of the website's features are live errors, a smooth caret, responsive design, and custom timers.",
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
      name: "Sawwit",
      description:
        "This is reddit clone created as part of my internship in Saperium. It has most of the foundational functionalities of Reddit, such as creating posts, comments, and votes, and modifying and deleting said elements. Database optimizations were also implemented by using a Flat Table implementation for the database, adding indexes to the tables, and implementing a Redis cache. File uploading for posts, users, and subreddits was also implemented using Multer. A real-time chat feature was also implemented using Socket.io.",
      techUsed: ["Angular", "ExpressJS", "MySQL", "Redis", "Socket.IO"],
      githubLink:
        "https://github.com/Saperium-Interns/interns-mini-apps/tree/main/Kevin-Mallari-Sawwit",
      liveLink: "",
      image: "/static/images/projects/sawwit.webp",
    },
    {
      name: "Undergraduate Thesis",
      description: `We collected electroencephalographic (EEG) data from a Brain-Computer Interface and trained a neural network. The trained network was then used to control a virtual prosthetic hand in real-time.\n\nThe study was nominated as one, out of 21 studies in the department, to present in the Ateneo de Manila University School of Science and Engineering Student Research Symposium. It won the People's Choice Award in the said symposium.`,
      techUsed: ["Python", "NumPy", "Pandas", "PyTorch", "mne"],
      githubLink: "",
      liveLink: "",
      image: "/static/images/projects/thesis.webp",
    },
    {
      name: "YouPerium",
      description:
        "This is project where I worked with six other interns in the company. We created what is essentially a YouTube clone, with the foundational functionalities of the platform. Some features include video uploading, video listing, and a recommendation system.\n\nMy personal contributions include creating all the API endpoints for the playlist functionality of the application, contributing to the playlist frontend using Angular, and creating of the recommendation system, which was implemented using AWS Personalize.",
      techUsed: ["Angular", "ExpressJS", "MySQL", "AWS S3", "AWS Personalize"],
      githubLink: "https://github.com/Saperium-Interns/interns-major-apps",
      liveLink: "",
      image: "/static/images/projects/youperium.webp",
    },
    {
      name: "WNRS Online",
      description:
        "I adapted the We're Not Really Strangers (WNRS) card game and turned it into a virtual experience. The game is basically a question and answer game, and the website makes it so that everyone in the lobby can see the current card in real-time through the use of web sockets using the Supabase BaaS.",
      techUsed: ["React", "NextJS", "Supabase", "PostgreSQL"],
      githubLink: "",
      liveLink: "https://klu-wnrs.vercel.app/",
      image: "/static/images/projects/wnrs.webp",
    },
  ];

  const [project, setProject] = useState<Project>({
    name: "",
    description: "",
    techUsed: [],
    githubLink: "",
    liveLink: "",
    image: "",
  });

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [2300, 2800], [1, 0.3]);

  return (
    <section
      id='projects'
      className='h-fit min-h-screen relative overflow-hidden'
      onMouseMove={handleMouse}
    >
      <motion.div
        className={`absolute h-full w-full bg-gradient-to-b from-primary-200 top-0 left-0`}
        style={{
          opacity: opacity,
        }}
      ></motion.div>
      <motion.div
        className={`absolute w-full h-full mx-auto left-0 right-0 ${styles["vertical-lines"]}`}
      ></motion.div>
      <div>
        <motion.h2
          className='h-fit w-fit absolute inset-0 mx-auto mt-16 md:my-auto font-extrabold z-10 text-3xl text-center uppercase tracking-widest text-primary-200 drop-shadow-[3px_3px_0px_rgba(49,89,185,0.4)]'
          style={{
            rotateX: rotateX2,
            rotateY: rotateY2,
          }}
        >
          Project
          <br />
          Showcase
        </motion.h2>

        {/* BALL IN THE MIDDLE */}
        <motion.div
          className={`rounded-full absolute inset-0 mx-auto my-auto`}
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            background:
              "linear-gradient(-45deg, rgba(43,89,195,1) 0%, rgba(26,142,204,0) 50%, rgba(14,177,210,1) 100%);",
            height:
              widthState !== null &&
              heightState !== null &&
              widthState < heightState
                ? widthState * 0.8
                : "80vh",
            width:
              widthState !== null &&
              heightState !== null &&
              widthState < heightState
                ? widthState * 0.8
                : "80vh",
          }}
        ></motion.div>

        {/* PROJECT BALLS */}
        <motion.div
          className='h-screen mx-auto relative'
          style={{
            rotateX: rotateX2,
            rotateY: rotateY2,
          }}
        >
          {projects.map((project, index) => {
            const magnitude = Math.round(360 / projects.length);
            const angle = magnitude * index;
            const rotate = `rotate-[${angle}deg]`;
            const negRotate = `rotate-[${-angle}deg]`;
            return (
              <div
                className={`absolute w-20 sm:w-24 md:w-28 lg:w-32 inset-0 my-auto mx-auto ${rotate}`}
                key={project.name}
                style={{
                  height:
                    widthState! < heightState! ? widthState! * 0.9 : "90vh",
                }}
              >
                <button
                  className={`w-full h-20 sm:h-24 md:h-28 lg:h-32 rounded-full bg-gradient-to-tr from-primary-300/50 to-neutral-light-300/20 hover:from-primary-200/80 hover:to-neutral-light-300/50 hover:border-neutral-dark-200 border-4 border-neutral-light-300 text-center flex items-center justify-center sm:whitespace-nowrap hover:scale-110 transition-all ${negRotate}`}
                  onClick={() => {
                    setProject(project);
                    setIsSidebarVisible(true);
                  }}
                >
                  <h6 className='text-xl font-azeret font-bold text-neutral-dark-200 drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]'>
                    {project.name}
                  </h6>
                </button>
              </div>
            );
          })}
        </motion.div>
        <ProjectSidebar
          project={project}
          isVisible={isSidebarVisible}
          setIsVisible={setIsSidebarVisible}
        />
      </div>
    </section>
  );
};
