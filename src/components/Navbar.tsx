import React, { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { motion, AnimatePresence } from "framer-motion";
export const Navbar: React.FC = ({}) => {
  const { width } = useWindowDimensions();
  const [w, setW] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  useEffect(() => {
    setW(width);
  }, []);

  useEffect(() => {
    setW(width);
  }, [width]);

  const bottomBurgerVariants = {
    initial: {
      y: -40,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: "anticipate",
      },
    },
    exit: {
      y: -40,
    },
  };

  const topBurgerVariants = {
    initial: {
      opacity: 0,
      y: -40,
    },
    animate: {
      opacity: 100,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: -40,
      transition: {
        ease: "anticipate",
      },
    },
  };

  const itemVariants = {
    initial: {
      opacity: 0,
      y: -40,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: -40,
    },
  };

  const itemVariantsMobile = {
    initial: {
      opacity: 0,
      x: -800,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: -800,
    },
  };

  const navItems = {
    home: {
      name: "Home",
      link: "/",
    },
    projects: {
      name: "Projects",
      link: "/projects",
    },
    contact: {
      name: "Contact",
      link: "/contact",
    },
  };

  return w !== null && w > 768 ? (
    <nav
      className={`w-full flex justify-center items-center backdrop-blur-sm fixed border-y border-slate-300 transition-all font-medium z-50 ${
        isOpen ? "h-16" : "h-8"
      }`}
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <AnimatePresence mode='popLayout' initial={false}>
        {!isOpen ? (
          <motion.button className='flex flex-col gap-2 py-2' key={1}>
            <motion.div
              variants={topBurgerVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              className='h-[2px] w-16 bg-slate-700 rounded-xl'
            ></motion.div>
            <motion.div
              variants={bottomBurgerVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              className='h-[2px] w-16 bg-slate-700 rounded-xl'
            ></motion.div>
          </motion.button>
        ) : (
          <motion.ul
            variants={itemVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            className='flex flex-row h-full items-center'
            key={2}
          >
            {Object.keys(navItems).map((key: string) => {
              return (
                <li
                  key={key}
                  className='flex flex-col gap-2 py-2 px-20 h-full items-center justify-center text-slate-400 transition-colors'
                >
                  <a
                    href={navItems[key as keyof typeof navItems].link}
                    data-replace={navItems[key as keyof typeof navItems].name}
                  >
                    <span className='flex flex-row gap-3 h-fit'>
                      {navItems[key as keyof typeof navItems].name}
                    </span>
                  </a>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  ) : (
    <nav
      className={`w-full flex flex-col items-center backdrop-blur-sm fixed border-y border-slate-300 transition-all font-medium h-16 z-50`}
    >
      <div
        className='flex flex-col gap-2 py-2 menu-icon menu-icon z-10'
        key={1}
        onClick={() => setIsOpenMobile((prev) => !prev)}
      >
        <input
          className='menu-icon__checkbox'
          type='checkbox'
          value={isOpenMobile ? 1 : 0}
        />
        <div>
          <span></span>
          <span></span>
        </div>
      </div>

      <AnimatePresence mode='popLayout' initial={false}>
        {isOpenMobile && (
          <motion.ul
            variants={itemVariantsMobile}
            initial='initial'
            animate='animate'
            exit='exit'
            className='fixed flex flex-col items-center justify-center gap-8 my-auto h-screen w-full bg-neutral-dark-300/80'
            key={2}
          >
            {Object.keys(navItems).map((key: string) => {
              return (
                <li
                  key={key}
                  className='flex flex-col gap-2 py-2 px-20 items-center justify-center text-neutral-light-100 transition-colors drop-shadow-sm h-fit '
                >
                  <a
                    href={navItems[key as keyof typeof navItems].link}
                    data-replace={navItems[key as keyof typeof navItems].name}
                  >
                    <span className='flex flex-row gap-3 h-fit'>
                      {navItems[key as keyof typeof navItems].name}
                    </span>
                  </a>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};
