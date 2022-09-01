import React from "react";
import styles from "../styles/stack.module.css";
import { SkillListing } from "./SkillListing";
import { motion, useTransform, useScroll, m } from "framer-motion";

export const Stack: React.FC = ({}) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 1000], [0, 1]);

  const frontend = [
    {
      name: "HTML",
      logo: "/static/images/tech/html.webp",
      width: 28,
    },
    {
      name: "CSS",
      logo: "/static/images/tech/css.webp",
      width: 28,
    },
    {
      name: "JavaScript",
      logo: "/static/images/tech/js.webp",
      width: 32,
    },
    {
      name: "TypeScript",
      logo: "/static/images/tech/ts.webp",
      width: 32,
    },
    {
      name: "React",
      logo: "/static/images/tech/react.webp",
      width: 32,
    },
    {
      name: "NextJS",
      logo: "/static/images/tech/nextjs.webp",
      width: 32,
    },
    {
      name: "Angular",
      logo: "/static/images/tech/angular.webp",
      width: 30,
    },
    {
      name: "Tailwind CSS",
      logo: "/static/images/tech/tailwind.webp",
      width: 54,
    },
    {
      name: "Bootstrap",
      logo: "/static/images/tech/bootstrap.webp",
      width: 40,
    },
  ];

  const backend = [
    {
      name: "NodeJS",
      logo: "/static/images/tech/nodejs.webp",
      width: 28,
    },
    {
      name: "ExpressJS",
      logo: "/static/images/tech/express.webp",
      width: 32,
    },
    {
      name: "REST APIs",
      logo: "/static/images/tech/restapi.webp",
      width: 36,
    },
    {
      name: "PostgreSQL",
      logo: "/static/images/tech/postgres.webp",
      width: 32,
    },
    {
      name: "MySQL",
      logo: "/static/images/tech/mysql.webp",
      width: 33,
    },
    {
      name: "MongoDB",
      logo: "/static/images/tech/mongodb.webp",
      width: 14,
    },
    {
      name: "Firebase",
      logo: "/static/images/tech/firebase.webp",
      width: 23,
    },
    {
      name: "Supabase",
      logo: "/static/images/tech/supabase.webp",
      width: 31,
    },
    {
      name: "Redis",
      logo: "/static/images/tech/redis.webp",
      width: 38,
    },
    {
      name: "Socket.IO",
      logo: "/static/images/tech/socket.webp",
      width: 32,
    },
  ];

  const misc = [
    {
      name: "Docker",
      logo: "/static/images/tech/docker.webp",
      width: 44,
    },
    {
      name: "Git",
      logo: "/static/images/tech/git.webp",
      width: 33,
    },
    {
      name: "AWS",
      logo: "/static/images/tech/aws.webp",
      width: 53,
    },
    {
      name: "Alibaba Cloud",
      logo: "/static/images/tech/alibaba.webp",
      width: 51,
    },
    {
      name: "Python",
      logo: "/static/images/tech/python.webp",
      width: 33,
    },
    {
      name: "Figma",
      logo: "/static/images/tech/figma.webp",
      width: 22,
    },
    {
      name: "Adobe Tools",
      logo: "/static/images/tech/adobe.webp",
      width: 37,
    },
    {
      name: "C++",
      logo: "/static/images/tech/c++.webp",
      width: 28,
    },
    {
      name: "Arduino",
      logo: "/static/images/tech/arduino.webp",
      width: 32,
    },
  ];

  return (
    <>
      <motion.div
        className={`h-[110vh] bg-gradient-to-b from-primary-200`}
        style={{
          opacity: opacity,
        }}
      ></motion.div>
      <section
        id='tech-stack'
        className='min-h-screen bg-neutral-dark-200 bg-dark-pattern'
      >
        <div className='w-[85%] sm:w-[90%] md:w-[90%] pt-24 mx-auto font-semibold text-3xl sm:text-4xl'>
          <div className='flex flex-row items-center gap-4 mb-8'>
            <h2 className='text-neutral-100'>Tech I&apos;ve Used</h2>
            <div className='w-24 h-[1px] border border-primary-200'></div>
          </div>
        </div>
        <div
          className={`w-[85%] sm:w-[90%] mx-auto bg-neutral-300/5 outline outline-1 outline-neutral-300/10 ${styles["bg-grid"]} p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12`}
        >
          <SkillListing title={"front end tools"} skills={frontend} />
          <SkillListing title={"back end tools"} skills={backend} />
          <SkillListing title={"miscellaneous tools"} skills={misc} />
        </div>
      </section>
      <div className='h-screen'></div>
    </>
  );
};
