import React from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import "./stack.css";
interface StackProps {}

export const Stack: React.FC<StackProps> = ({}) => {
  const { height, width } = useWindowDimensions();
  const spaceHeight =
    height! < 668 ? "h-[64rem]" : height! < 900 ? "h-[54rem]" : "h-[52rem]";
  return (
    <>
      <div className={`h-screen`}></div>
      <section id='tech-stack' className='min-h-screen bg-neutral-dark-100/10'>
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
      <div className="h-screen"></div>
    </>
  );
};
