import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../frontPageData';

const mainDivClasses = 'p-0';
// again an issue with tailwind being unable to generate non-dynamic classes... oh well
const smClass = 'sm:h-[100%]';
// const mdClass = 'md:';
const lgClass = 'xl:h-[%100] overflow-auto';
const Projects: React.FunctionComponent = () => {
  return (
    <div className={`${smClass} ${lgClass}${mainDivClasses} `}>
      <div
        className={`text-center grid xs:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 py-5`}
      >
        {projects.map(
          (
            {
              title,
              subtitle,
              description,
              image,
              link,
            }: {
              title: string;
              subtitle: string;
              description: string;
              image: string;
              link: string;
            },
            index
          ) => (
            <ProjectCard
              title={title}
              subtitle={subtitle}
              description={description}
              image={image}
              link={link}
              index={index}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
