import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

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
            className='fixed h-screen w-full top-0 left-0 bg-neutral-dark-200/90 z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsVisible(false);
            }}
          ></motion.div>
          <div className='fixed h-fit w-full sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 top-0 right-0 z-50 font-switzer'>
            <div className='relative w-full h-full '>
              <motion.div
                className='bg-dark-pattern bg-neutral-dark-200 h-screen top-0 right-0 p-12 flex flex-col justify-start overflow-y-auto overflow-x-hidden relative z-0'
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  duration: 0.2,
                  delay: 0.2,
                  type: "linear",
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className='overflow-hidden absolute -right-96 -top-96'
                  animate={{ scale: [0.8, 0.8, 0.8], opacity: [1, 0, 1] }}
                  transition={{
                    duration: 5,
                    type: "spring",
                    repeat: Infinity,
                  }}
                >
                  <img
                    src='/static/images/blurred_ball.webp'
                    className=''
                    alt='blurred ball'
                    width={4000}
                  />
                </motion.div>

                <div className='relative flex flex-col md:flex-row items-center gap-6 lg:gap-12 z-20'>
                  <h3 className='text-4xl font-extrabold text-secondary-200'>
                    {project.name}
                  </h3>
                  {(project.liveLink || project.githubLink) && (
                    <div className='h-4 border border-l border-neutral-light-300 hidden md:block'></div>
                  )}

                  <div className='flex flex-row gap-4 text-2xl text-neutral-light-300'>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target='_blank'
                        className='hover:text-neutral-light-100 hover:scale-110 transition-all'
                      >
                        <AiFillGithub />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target='_blank'
                        className='hover:text-neutral-light-100 hover:scale-110 transition-all'
                      >
                        <AiOutlineLink />
                      </a>
                    )}
                  </div>
                </div>
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className=' my-8 rounded-2xl z-20'
                />
                <p className='text-neutral-light-300 tracking-wider font-light whitespace-pre-line text-[0.9rem] leading-loose z-20'>
                  {project.description}
                </p>
                <div className='flex flex-col gap-2 font-azeret text-neutral-light-300 my-12 z-20'>
                  <h5 className='text-lg text-secondary-200'>Tech Used:</h5>
                  <ul className='flex flex-row flex-wrap gap-2 text-sm font-light'>
                    {project.techUsed.map((tech, i) => (
                      <li
                        key={tech}
                        className='flex flex-row items-center gap-2'
                      >
                        <h6>{tech}</h6>
                        {i !== project.techUsed.length - 1 && <BsDot />}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className='absolute hover:text-secondary-200 transition-all top-4 right-4 z-20'
                >
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
                      d='M6 18L18 6M6 6l12 12'
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
