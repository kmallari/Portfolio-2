import React from "react";
import styles from "../styles/stack.module.css";

export const Stack: React.FC = ({}) => {
  return (
    <>
      <div className={`h-screen`}></div>
      <section id='tech-stack' className='min-h-screen bg-neutral-dark-100/10'>
        <div className='w-[85%] sm:w-[90%] md:w-[90%] pt-24 mx-auto font-semibold text-3xl sm:text-4xl'>
          <div className='flex items-center gap-4'>
            <h2 className='text-neutral-dark-200'>Tech I&apos;ve Used</h2>
            <div className='w-24 h-[1px] border border-primary-200'></div>
          </div>
        </div>
        <div
          className={`w-[85%] sm:w-[90%] mx-auto bg-neutral-dark-100/10 outline outline-1 outline-neutral-dark-200/40 ${styles["bg-grid"]}`}
        >
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
        </div>
      </section>
      <div className='h-screen'></div>
    </>
  );
};
