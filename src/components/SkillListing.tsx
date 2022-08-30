import React from "react";
import Image from "next/image";
interface Skill {
  name: string;
  logo: string;
  width: number;
}

interface SkillListingProps {
  title: string;
  skills: Skill[];
}

export const SkillListing: React.FC<SkillListingProps> = ({
  title,
  skills,
}) => {
  return (
    <div>
      <h3 className='text-lg font-semibold uppercase tracking-widest mb-4'>
        {title}
      </h3>
      <ul className='flex flex-row flex-wrap gap-10 items-center'>
        {skills.map((tech) => (
          <li
            key={tech.name}
            className='flex items-center justify-between p-6 rounded-md bg-[#d6f1ff05] outline-neutral-light-300/10 hover:bg-neutral-light-300/10 outline outline-1 hover:outline-neutral-light-300 hover:outline-4 transition-all group'
          >
            <div className='flex flex-col items-center gap-4'>
              <Image
                src={tech.logo}
                width={tech.width}
                height={32}
                alt={tech.name}
                className={`h-fit group-hover:scale-90 transition-all`}
              ></Image>
              <h4 className='font-azeret font-light text-sm text-neutral-light-300/50'>
                {tech.name}
              </h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
