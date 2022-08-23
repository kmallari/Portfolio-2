import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const [time, setTime] = useState(0);

  const millisToYears = (millis: number) => {
    return millis / (1000 * 60 * 60 * 24 * 365);
  };

  const birthday = DateTime.fromISO("1999-06-02").toMillis();

  useEffect(() => {
    setTimeout(() => {
      setTime(millisToYears(DateTime.local().toMillis() - birthday));
      console.log("TEST");
    }, 100);
  }, [time]);

  return (
    <header className='text-3xl min-h-screen h-fit flex flex-col items-center justify-center relative w-11/12 mx-auto font-azeret'>
      <img
        src='/static/images/self.webp'
        alt='kevin mallari'
        className='h-[48rem] absolute bottom-0 right-96 select-none'
      />
      <div className='z-10'>
        <h1 className={`font-semibold leading-tight text-[9rem]`}>
          {time.toFixed(8)} yr old
          <br />
          Full Stack
          <br />
          Software Engineer
        </h1>
      </div>
    </header>
  );
};
