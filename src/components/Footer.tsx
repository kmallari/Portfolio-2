import React from 'react'

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = ({}) => {
    return (
      <footer className="py-4 from-neutral-dark-300 to-slate-500 bg-gradient-to-tr">
        <h6 className="mx-auto text-center text-neutral-light-300 text-sm">Kevin Mallari © All Rights Reserved.</h6>
      </footer>
    );
}