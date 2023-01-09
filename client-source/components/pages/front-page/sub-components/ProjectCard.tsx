import React, { useState } from 'react';

const transitionClass = 'transition ease-in-out delay-150 duration-200';

const mainDivClasses = 'my-4 p-0 hover:shadow-2xl';

const ProjectCard: React.FunctionComponent<{
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  index: number;
}> = ({ title, subtitle, description, image, link, index }) => {
  const [hover, setHover] = useState<boolean>(false);
  const smDim = 'h-[24rem] w-[24rem]';
  const mdDim = 'md:h-[19rem] md:w-[19rem]';
  const xl2Dim = '2xl:h-[25rem] 2xl:w-[24rem]';

  return (
    <div
      className={`${mainDivClasses} ${smDim} ${mdDim} ${xl2Dim} justify-self-center`}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => window.open(link, '_blank')}
      style={{ cursor: hover ? 'pointer' : 'default' }}
    >
      <div className={`${hover ? 'h-0' : 'h-2/3'} `}>
        <img
          className="h-full w-full rounded-t-xl m-0 p-0"
          style={{ zIndex: '0' }}
          src={`images${image}`}
        />
      </div>
      <div
        className={`${transitionClass} ${
          hover ? 'h-[100%] w-full' : 'h-1/3'
        } bg-white px-1 border-t-2 rounded-b-xl ${
          hover && 'rounded-t-xl p-4'
        } border-color-zinc-400`}
        style={{ zIndex: '1' }}
      >
        <p className="mb-1 font-bold w-auto bg-slate-300 mx-0 rounded-lg">
          {title}
        </p>
        {hover ? description : subtitle}
      </div>
    </div>
  );
};

export default ProjectCard;
