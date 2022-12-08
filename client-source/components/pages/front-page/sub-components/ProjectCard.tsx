import React from 'react';

const transitionClass = 'transition ease-in-out delay-150 duration-200 ';

const ProjectCard: React.FunctionComponent = () => {
  return (
    <div
      className={`${transitionClass} m-5 hover:shadow-2xl h-[225px] hover:scale-y-150 hover:translate-y-10`}
    >
      <div className={`${transitionClass} bg-zinc-300 h-2/3`}>Hello</div>
      <div className={`${transitionClass} bg-zinc-500 h-1/3 p-3 text-white`}>
        {' '}
        This is text
      </div>
    </div>
  );
};

export default ProjectCard;
