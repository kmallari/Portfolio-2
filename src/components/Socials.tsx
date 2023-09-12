// import React from "react";
// import { BsLinkedin, BsGithub } from "react-icons/bs";
// interface SocialsProps {}

// export const Socials: React.FC<SocialsProps> = ({}) => {
//   return (
//     <nav className='fixed h-24 w-8 top-0 bottom-0 left-0 my-auto text-neutral-dark-200 z-50'>
//       <ul className='h-full w-full grid grid-rows-2 items-center group shadow-xl'>
//         <li className='w-full h-full'>
//           <a
//             className='w-full h-full flex items-center justify-center hover:-translate-y-1 hover:translate-x-1 bg-neutral-light-200 border-r border-t border-primary-200 group-hover:border hover:shadow-xl hover:shadow-primary-200 transition-all'
//             href='https://www.linkedin.com/in/kevin-luis-mallari-a4364719a/'
//             target={"_blank"}
//           >
//             <BsLinkedin />
//           </a>
//         </li>
//         <li className='w-full h-full'>
//           <a
//             className='w-full h-full flex items-center justify-center hover:translate-y-1 hover:translate-x-1 bg-neutral-light-200 border-r border-b border-primary-200 group-hover:border hover:shadow-xl hover:shadow-primary-200 transition-all'
//             href='https://github.com/kmallari/'
//             target={"_blank"}
//           >
//             <BsGithub />
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
interface SocialsProps {}

export const Socials: React.FC<SocialsProps> = ({}) => {
  return (
    <nav className='fixed h-12 w-8 top-0 bottom-0 left-0 my-auto text-neutral-dark-200 z-50'>
      <ul className='h-full w-full grid grid-rows-1 items-center group shadow-xl'>
        {/* <li className='w-full h-full'>
          <a
            className='w-full h-full flex items-center justify-center hover:-translate-y-1 hover:translate-x-1 bg-neutral-light-200 border-r border-t border-primary-200 group-hover:border hover:shadow-xl hover:shadow-primary-200 transition-all'
            href='https://www.linkedin.com/in/kevin-luis-mallari-a4364719a/'
            target={"_blank"}
          >
            <BsLinkedin />
          </a>
        </li> */}
        <li className='w-full h-full'>
          <a
            className='w-full h-full flex items-center justify-center hover:translate-y-1 hover:translate-x-1 bg-neutral-light-200 border border-primary-200 group-hover:border hover:shadow-xl hover:shadow-primary-200 transition-all'
            href='https://github.com/kmallari/'
            target={"_blank"}
          >
            <BsGithub />
          </a>
        </li>
      </ul>
    </nav>
  );
};

