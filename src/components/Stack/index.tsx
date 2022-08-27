import React from "react";
import "./stack.css";
interface StackProps {}

export const Stack: React.FC<StackProps> = ({}) => {
  return (
    <>
      <div className='h-screen'></div>
      <section id='tech-stack' className='min-h-screen bg-neutral-dark-200/50'>
        <div className='w-[85%] sm:w-[90%] md:w-[90%] pt-24 mx-auto font-semibold text-3xl sm:text-4xl'>
          <div className='flex items-center gap-4'>
            <h2 className=''>Tech I've Used</h2>
            <div className='w-24 h-[1px] border border-primary-200'></div>
          </div>
        </div>
        <div className='w-[85%] sm:w-[90%] mx-auto bg-neutral-dark-200/50 bg-grid border border-neutral-dark-100/50'>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
        </div>
      </section>
    </>
  );
};
