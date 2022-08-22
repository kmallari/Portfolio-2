import React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className='text-3xl min-h-screen h-fit flex flex-col items-center justify-center'>
      <h2 className='font-switzer font-black'>Default</h2>
      <h2>Default</h2>
      <h2 className='font-azeret font-semibold'>Mono</h2>
    </header>
  );
};
