import React, { useState } from "react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { DateTime } from "luxon";
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

  return (
    <header className='min-h-screen flex flex-col items-center justify-center relative w-11/12 mx-auto font-azeret'>
      <img
        src='/static/images/self.webp'
        alt='kevin mallari'
        className='absolute bottom-0 sm:w-5/6 md:w-2/3 lg:w-7/12 xl:w-1/2 2xl:w-5/12'
        style={{
          right: `${width && getBaseLog(1.1, width / 800)}rem`,
        }}
      />
      <div className='flex flex-col leading-tight drop-shadow-sm lg:drop-shadow-xl'>
        <h1
          className={`font-semibold z-10`}
          style={{
            fontSize: `${width && width * 0.0045}rem`,
          }}
        >
          {width && width > 564 ? (
            `${time.toFixed(9)} yr old`
          ) : (
            <>
              {`${time.toFixed(9)}`} <br /> year old
            </>
          )}
        </h1>
        <h1
          className={`font-semibold`}
          style={{
            fontSize: `${width && width * 0.0045}rem`,
          }}
        >
          Full Stack
        </h1>
        <h1
          className={`font-semibold z-10`}
          style={{
            fontSize: `${width && width * 0.0045}rem`,
          }}
        >
          Software Engineer
        </h1>
      </div>
    </header>
  );
};
