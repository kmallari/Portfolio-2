import React from "react";
import styles from "../styles/stack.module.css";
import { SkillListing } from "./SkillListing";
import { motion, useTransform, useScroll } from "framer-motion";
import { InView } from "react-intersection-observer";
interface StackProps {
  stackRef: React.RefObject<HTMLDivElement>;
  setIsStackInView: (data: boolean) => void;
}

export const Stack: React.FC<StackProps> = ({ stackRef, setIsStackInView }) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 1000], [0, 1]);

  const frontend = [
    {
      name: "HTML",
      logo: "/static/images/tech/html.webp",
      width: 28,
      proficient: true,
    },
    {
      name: "CSS",
      logo: "/static/images/tech/css.webp",
      width: 28,
      proficient: true,
    },
    {
      name: "JavaScript",
      logo: "/static/images/tech/js.webp",
      width: 32,
      proficient: true,
    },
    {
      name: "TypeScript",
      logo: "/static/images/tech/ts.webp",
      width: 32,
      proficient: true,
    },
    {
      name: "React",
      logo: "/static/images/tech/react.webp",
      width: 32,
      proficient: true,
    },
    {
      name: "NextJS",
      logo: "/static/images/tech/nextjs.webp",
      width: 32,
      proficient: true,
    },
    {
      name: "Angular",
      logo: "/static/images/tech/angular.webp",
      width: 30,
      proficient: true,
    },
    {
      name: "Tailwind CSS",
      logo: "/static/images/tech/tailwind.webp",
      width: 54,
      proficient: true,
    },
    {
      name: "Bootstrap",
      logo: "/static/images/tech/bootstrap.webp",
      width: 40,
      proficient: false,
    },
  ];

  const backend = [
    {
      name: "NodeJS",
      logo: "/static/images/tech/nodejs.webp",
      width: 28,
      proficient: true,
    },
    {
      name: "ExpressJS",
      logo: "/static/images/tech/express.webp",
      width: 32,
      proficient: true,
    },
    {
      name: "REST APIs",
      logo: "/static/images/tech/restapi.webp",
      width: 36,
      proficient: true,
    },
    {
      name: "PostgreSQL",
      logo: "/static/images/tech/postgres.webp",
      width: 32,
      proficient: false,
    },
    {
      name: "MySQL",
      logo: "/static/images/tech/mysql.webp",
      width: 33,
      proficient: true,
    },
    {
      name: "MongoDB",
      logo: "/static/images/tech/mongodb.webp",
      width: 14,
      proficient: false,
    },
    {
      name: "Firebase",
      logo: "/static/images/tech/firebase.webp",
      width: 23,
      proficient: false,
    },
    {
      name: "Supabase",
      logo: "/static/images/tech/supabase.webp",
      width: 31,
      proficient: false,
    },
    {
      name: "Redis",
      logo: "/static/images/tech/redis.webp",
      width: 38,
      proficient: false,
    },
    {
      name: "Socket.IO",
      logo: "/static/images/tech/socket.webp",
      width: 32,
      proficient: false,
    },
  ];

  const misc = [
    {
      name: "Docker",
      logo: "/static/images/tech/docker.webp",
      width: 44,
      proficient: false,
    },
    {
      name: "Git",
      logo: "/static/images/tech/git.webp",
      width: 33,
      proficient: true,
    },
    {
      name: "AWS",
      logo: "/static/images/tech/aws.webp",
      width: 53,
      proficient: false,
    },
    {
      name: "Alibaba Cloud",
      logo: "/static/images/tech/alibaba.webp",
      width: 51,
      proficient: false,
    },
    {
      name: "Python",
      logo: "/static/images/tech/python.webp",
      width: 33,
      proficient: true,
    },
    {
      name: "Figma",
      logo: "/static/images/tech/figma.webp",
      width: 22,
      proficient: true,
    },
    {
      name: "Adobe Tools",
      logo: "/static/images/tech/adobe.webp",
      width: 37,
      proficient: true,
    },
    {
      name: "C++",
      logo: "/static/images/tech/c++.webp",
      width: 28,
      proficient: false,
    },
    {
      name: "Arduino",
      logo: "/static/images/tech/arduino.webp",
      width: 32,
      proficient: false,
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
        className='min-h-screen bg-neutral-dark-200 bg-dark-pattern py-24'
        ref={stackRef}
      >
        <InView
          as='div'
          onChange={(inView, entry) => {
            setIsStackInView(inView);
          }}
        >
          <div className='w-[85%] sm:w-[90%] md:w-[90%] mx-auto mb-8 flex'>
            <div className='flex flex-row items-center gap-4'>
              <h2 className='text-neutral-100 font-semibold text-xl sm:text-3xl md:text-4xl'>
                Tech I&apos;ve Used
              </h2>
              <div className='w-24 h-[1px] border border-primary-200'></div>
            </div>
            <h5 className='p-4 border-2 border-primary-200 bg-primary-200/10 rounded-lg w-fit font-azeret uppercase text-xs'>
              Tech I'm Proficient In
            </h5>
          </div>
          <div
            className={`w-[85%] sm:w-[90%] mx-auto bg-neutral-300/5 outline outline-1 outline-neutral-300/10 ${styles["bg-grid"]} p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12`}
          >
            <SkillListing title={"front end tools"} skills={frontend} />
            <SkillListing title={"back end tools"} skills={backend} />
            <SkillListing title={"miscellaneous tools"} skills={misc} />
          </div>
        </InView>
      </section>
    </>
  );
};
