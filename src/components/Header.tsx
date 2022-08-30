import React, { useState, useEffect } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { DateTime } from "luxon";
import { motion, useTransform, useScroll } from "framer-motion";
import styles from "../styles/header.module.css";
export const Header: React.FC = ({}) => {
  const { height, width } = useWindowDimensions();
  const [h, setH] = useState<number | null>(null);
  const [w, setW] = useState<number | null>(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    setH(height);
    setW(width);
  }, []);

  useEffect(() => {
    setH(height);
  }, [height]);

  useEffect(() => {
    setW(width);
  }, [width]);

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
  const y2 = useTransform(scrollY, [0, 900], [0, 500]);
  const y3 = useTransform(scrollY, [0, 1000], [0, h! > 900 ? h : h! * 1.2]);
  const y4 = useTransform(scrollY, [0, 900], [0, 100]);
  const y5 = useTransform(scrollY, [0, 900], [0, -200]);
  const y6 = useTransform(scrollY, [0, 900], [0, 0]);
  const y7 = useTransform(scrollY, [0, 900], [0, 300]);
  const y8 = useTransform(scrollY, [0, 900], [0, -200]);
  const color = useTransform(scrollY, [0, 1200], ["#1e293b", "#2B59C3"]);
  const marginTop = useTransform(scrollY, [0, 1400], [0, h! / 3]);

  return (
    <header className='min-h-screen flex flex-col items-center sm:justify-center relative w-11/12 mx-auto font-azeret text-slate-800'>
      <motion.div
        className={`absolute w-full h-full mx-auto left-0 right-0 ${styles["vertical-lines"]}`}
        style={{ y: y2 }}
      >
        <motion.div
          style={{ y: y4 }}
          className='absolute top-8 h-[30%] w-[10%] bg-gradient-to-b from-primary-200'
        ></motion.div>
        <motion.div
          style={{ y: y5 }}
          className='absolute left-[20%] bottom-[10%] h-[40%] w-[10%] bg-gradient-to-b from-primary-200'
        ></motion.div>
        <motion.div
          style={{ y: y6 }}
          className='absolute left-[40%] top-[20%] h-[20%] w-[10%] bg-gradient-to-b from-primary-200'
        ></motion.div>
        <motion.div
          style={{ y: y7 }}
          className='absolute left-[60%] top-[30%] h-[20%] w-[10%] bg-gradient-to-b from-primary-200'
        ></motion.div>
        <motion.div
          style={{ y: y8 }}
          className='absolute left-[80%] top-[10%] h-[50%] w-[10%] bg-gradient-to-b from-primary-200'
        ></motion.div>
      </motion.div>
      <motion.img
        src='/static/images/self.webp'
        alt='kevin mallari'
        className='absolute bottom-0 sm:w-5/6 md:w-2/3 lg:w-7/12 xl:w-1/2 2xl:w-5/12'
        style={{
          right: `${w && getBaseLog(1.1, w / 800)}rem`,
        }}
      />
      <div className='flex flex-col leading-tight drop-shadow-lg mt-40 sm:mt-0 z-10'>
        <motion.h1
          className={`font-semibold white-shadow`}
          style={{
            fontSize: `${w && w * 0.0045}rem`,
            y: y1,
          }}
        >
          {w && w > 564 ? (
            `${time.toFixed(9)} yr old`
          ) : (
            <>
              {`${time.toFixed(9)}`} <br /> Year old
            </>
          )}
        </motion.h1>
        <motion.div
          style={{
            y: y3,
            color: color,
            marginTop: marginTop,
          }}
        >
          <h1
            className={`font-semibold white-shadow`}
            style={{
              fontSize: `${w && w * 0.0045}rem`,
            }}
          >
            Full Stack
          </h1>
          <motion.h1
            className={`font-semibold white-shadow`}
            style={{
              fontSize: `${w && w * 0.0045}rem`,
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
            key={i}
          ></motion.div>
        ))}
      </motion.div>
    </header>
  );
};
