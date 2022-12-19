import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../frontPageData';

const mainDivClasses = 'rounded-lg  my-4  p-0 h-[680px]';
// again an issue with tailwind being unable to generate non-dynamic classes... oh well

const Projects: React.FunctionComponent = () => {
  return (
    <div className={`${mainDivClasses} `}>
      <div className="h-full text-center grid xs:grid-cols-2 xl:grid-cols-4 py-3">
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
