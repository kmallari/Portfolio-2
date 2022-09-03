import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Project {
  name: string;
  description: string;
  techUsed: string[];
  githubLink: string;
  liveLink: string;
  image: string;
}

interface ProjectSidebarProps {
  project: Project;
  isVisible: boolean;
  setIsVisible: (val: boolean) => void;
}

export const ProjectSidebar: React.FC<ProjectSidebarProps> = ({
  project,
  isVisible,
  setIsVisible,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className='fixed z-10 h-screen w-full top-0 left-0 bg-neutral-dark-200/90'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsVisible(false);
            }}
          ></motion.div>
          <div className='fixed h-screen w-3/4 top-0 right-0 z-50'>
            <div className='relative w-full h-full'>
              <motion.div
                className=' bg-neutral-dark-200 h-screen top-0 right-0'
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  duration: 0.5,
                  type: "linear",
                  ease: "easeInOut",
                }}
              >
                <h4>{project.name}</h4>
                <button onClick={() => setIsVisible(false)}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
