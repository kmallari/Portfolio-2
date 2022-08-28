import React from "react";
import styles from "../styles/stack.module.css";
import Image from "next/image";
import { motion, useTransform, useScroll, m } from "framer-motion";

export const Stack: React.FC = ({}) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 1000], [0, 1]);

  const frontend = [
    {
      name: "html",
      logo: "/static/images/tech/html.webp",
      width: 28,
    },
    {
      name: "css",
      logo: "/static/images/tech/css.webp",
      width: 28,
    },
    {
      name: "js",
      logo: "/static/images/tech/js.webp",
      width: 32,
    },
    {
      name: "ts",
      logo: "/static/images/tech/ts.webp",
      width: 32,
    },
    {
      name: "react",
      logo: "/static/images/tech/react.webp",
      width: 95,
    },
    {
      name: "nextjs",
      logo: "/static/images/tech/next-light.webp",
      width: 114,
    },
    {
      name: "angular",
      logo: "/static/images/tech/angular.webp",
      width: 30,
    },
    {
      name: "tailwind",
      logo: "/static/images/tech/tailwind-light.webp",
      width: 256,
    },
    {
      name: "bootstrap",
      logo: "/static/images/tech/bootstrap.webp",
      width: 40,
    },
  ];

  const backend = [
    {
      name: "nodejs",
      logo: "/static/images/tech/nodejs-light.webp",
      width: 118,
    },
    {
      name: "express",
      logo: "/static/images/tech/express-light.webp",
      width: 145,
    },
    {
      name: "restapi",
      logo: "/static/images/tech/restapi.webp",
      width: 186,
    },
    {
      name: "postgresql",
      logo: "/static/images/tech/postgres-light.webp",
      width: 215,
    },
    {
      name: "mysql",
      logo: "/static/images/tech/mysql.webp",
      width: 193,
    },
    {
      name: "mongodb",
      logo: "/static/images/tech/mongodb-light.webp",
      width: 181,
    },
    {
      name: "firebase",
      logo: "/static/images/tech/firebase.webp",
      width: 114,
    },
    {
      name: "supabase",
      logo: "/static/images/tech/supabase.webp",
      width: 183,
    },
    {
      name: "redis",
      logo: "/static/images/tech/redis.webp",
      width: 134,
    },
    {
      name: "socket.io",
      logo: "/static/images/tech/socket-light.webp",
      width: 190,
    },
  ];

  const misc = [
    {
      name: "docker",
      logo: "/static/images/tech/docker.webp",
      width: 177,
    },
    {
      name: "git",
      logo: "/static/images/tech/git-light.webp",
      width: 77,
    },
    {
      name: "aws",
      logo: "/static/images/tech/aws-light.webp",
      width: 53,
    },
    {
      name: "alibaba-cloud",
      logo: "/static/images/tech/alibaba.webp",
      width: 251,
    },
    {
      name: "python",
      logo: "/static/images/tech/python.webp",
      width: 132,
    },
    {
      name: "c++",
      logo: "/static/images/tech/c++.webp",
      width: 28,
    },
    {
      name: "arduino",
      logo: "/static/images/tech/arduino.webp",
      width: 248,
    },
    {
      name: "figma",
      logo: "/static/images/tech/figma-light.webp",
      width: 117,
    },
    {
      name: "adobe",
      logo: "/static/images/tech/adobe.webp",
      width: 165,
    },
  ];

  return (
    <>
      <motion.div
        className={`h-screen bg-gradient-to-b from-primary-200`}
        style={{
          opacity: opacity,
        }}
      ></motion.div>
      <section
        id='tech-stack'
        className='min-h-screen bg-neutral-dark-200 bg-dark-pattern'
      >
        <div className='w-[85%] sm:w-[90%] md:w-[90%] pt-24 mx-auto font-semibold text-3xl sm:text-4xl'>
          <div className='flex items-center gap-4'>
            <h2 className='text-neutral-light-100'>Tech I&apos;ve Used</h2>
            <div className='w-24 h-[1px] border border-primary-200'></div>
          </div>
        </div>
        <div
          className={`w-[85%] sm:w-[90%]  mx-auto bg-neutral-light-300/5 outline outline-1 outline-neutral-light-300/10 ${styles["bg-grid"]}`}
        >
          <ul className='flex flex-row gap-4 flex-wrap'>
            {frontend.map((tech) => (
              <li
                key={tech.name}
                className='flex items-center justify-between p-4'
              >
                <div className=''>
                  <Image
                    src={tech.logo}
                    width={tech.width}
                    height={32}
                    alt={tech.name}
                    className={`h-fit hover:scale-90 transition-all`}
                  ></Image>
                </div>
              </li>
            ))}
          </ul>
          <ul className='flex flex-row gap-4 flex-wrap'>
            {backend.map((tech) => (
              <li
                key={tech.name}
                className='flex items-center justify-between p-4'
              >
                <div className=''>
                  <Image
                    src={tech.logo}
                    width={tech.width}
                    height={32}
                    alt={tech.name}
                    className={`h-fit hover:scale-90 transition-all`}
                  ></Image>
                </div>
              </li>
            ))}
          </ul>
          <ul className='flex flex-row gap-4 flex-wrap'>
            {misc.map((tech) => (
              <li
                key={tech.name}
                className='flex items-center justify-between p-4'
              >
                <div className=''>
                  <Image
                    src={tech.logo}
                    width={tech.width}
                    height={32}
                    alt={tech.name}
                    className={`h-fit hover:scale-90 transition-all`}
                  ></Image>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className='h-screen'></div>
    </>
  );
};
