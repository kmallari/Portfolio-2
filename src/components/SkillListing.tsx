import React from "react";
import Image from "next/image";
interface Skill {
  name: string;
  logo: string;
  width: number;
  proficient: boolean;
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
    <div
      className={`${
        title === "miscellaneous tools"
          ? "md:col-span-2 lg:col-span-1"
          : ""
      }`}
    >
      <h3 className='text-lg font-semibold uppercase tracking-widest mb-4 font-azeret'>
        {title}
      </h3>
      <ul className='flex flex-row flex-wrap gap-10 items-center'>
        {skills.map((tech) => (
          <li
            key={tech.name}
            className={`flex items-center justify-between p-4 lg:p-6 rounded-md transition-all group ${
              tech.proficient
                ? "bg-primary-200/10 border border-primary-200 hover:bg-primary-100/10 hover:shadow-2xl hover:shadow-primary-200 "
                : "bg-[#d6f1ff05] border border-neutral-light-300/10 hover:bg-neutral-light-300/10 hover:shadow-2xl hover:shadow-neutral-light-300/20"
            }`}
          >
            <div className='flex flex-col items-center gap-4'>
              <Image
                src={tech.logo}
                width={tech.width}
                height={32}
                alt={tech.name}
                className={`h-fit group-hover:scale-90 transition-all`}
              ></Image>
              <h4 className='font-switzer text-sm text-neutral-light-300/50'>
                {tech.name}
              </h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
