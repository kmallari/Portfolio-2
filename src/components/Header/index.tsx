import React, { useState } from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { DateTime } from "luxon";
import { motion, useTransform, useScroll } from "framer-motion";
import "./header.css";
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const { height, width } = useWindowDimensions();
  const [time, setTime] = useState(0);

  const millisToYears = (millis: number) => {
    return millis / (1000 * 60 * 60 * 24 * 365);
  };

  const birthday = DateTime.fromISO("1999-06-02").toMillis();

  setTimeout(() => {
    setTime(millisToYears(DateTime.local().toMillis() - birthday));
  }, 40);

  const getBaseLog = (x: number, y: number) => {
    return Math.log(y) / Math.log(x);
  };
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 400]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const y3 = useTransform(scrollY, [0, 900], [0, 500]);
  const y4 = useTransform(
    scrollY,
    [0, 1000],
    [0, height! > 900 ? height : height! * 1.2]
  );
  const color = useTransform(scrollY, [0, 1200], ["#1e293b", "#2B59C3"]);
  const marginTop = useTransform(scrollY, [0, 1400], [0, height! / 3]);
  // const marginTop2 = useTransform(scrollY, [0, 1000], [0, 100]);
  // const marginTop3 = useTransform(scrollY, [0, 2000], [0, 0]);
  // const marginTop4 = useTransform(scrollY, [0, 2000], [0, height! / 4]);

  return (
    <header className='min-h-screen flex flex-col items-center sm:justify-center relative w-11/12 mx-auto font-azeret text-slate-800'>
      <motion.div
        className='absolute w-full h-full vertical-lines mx-auto left-0 right-0'
        style={{ y: y3 }}
      >
        <div className='absolute top-8 h-[30%] w-[10%] bg-gradient-to-b from-primary-200'></div>
        <div className='absolute left-[20%] bottom-[10%] h-[40%] w-[10%] bg-gradient-to-b from-primary-200'></div>
        <div className='absolute left-[40%] top-[20%] h-[20%] w-[10%] bg-gradient-to-b from-primary-200'></div>
        <div className='absolute left-[60%] top-[30%] h-[20%] w-[10%] bg-gradient-to-b from-primary-200'></div>
        <div className='absolute left-[80%] top-[10%] h-[50%] w-[10%] bg-gradient-to-b from-primary-200'></div>
      </motion.div>
      <motion.img
        src='/static/images/self.webp'
        alt='kevin mallari'
        className='absolute bottom-0 sm:w-5/6 md:w-2/3 lg:w-7/12 xl:w-1/2 2xl:w-5/12'
        style={{
          right: `${width && getBaseLog(1.1, width / 800)}rem`,
          y: y2,
        }}
      />
      <div className='flex flex-col leading-tight drop-shadow-lg mt-40 sm:mt-0 z-10'>
        <motion.h1
          className={`font-semibold`}
          style={{
            fontSize: `${width && width * 0.0045}rem`,
            y: y1,
          }}
        >
          {width && width > 564 ? (
            `${time.toFixed(9)} yr old`
          ) : (
            <>
              {`${time.toFixed(9)}`} <br /> Year old
            </>
          )}
        </motion.h1>
        <motion.div
          style={{
            y: y4,
            color: color,
            marginTop: marginTop,
          }}
        >
          <h1
            className={`font-semibold`}
            style={{
              fontSize: `${width && width * 0.0045}rem`,
            }}
          >
            Full Stack
          </h1>
          <motion.h1
            className={`font-semibold`}
            style={{
              fontSize: `${width && width * 0.0045}rem`,
            }}
          >
            Software Engineer
          </motion.h1>
        </motion.div>
      </div>
      <motion.div
        className='h-16 w-6 bg-primary-200 rounded-xl mx-auto absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center gap-2'
        style={{ y: y1 }}
      >
        {[1, 2, 3].map((num: number, i: number) => (
          <motion.div
            animate={{
              opacity: [0, 1, 0],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              delay: i * 0.8,
            }}
            className='h-2 w-2 bg-white rounded-full'
          ></motion.div>
        ))}
      </motion.div>
    </header>
  );
};
