import React, { useState } from 'react';

const transitionClass = 'transition ease-in-out delay-150 duration-200 ';

const mainDivClasses =
  'rounded-lg my-4 p-0 hover:shadow-2xl hover:translate-y-2';

const colorsLight = [
  'bg-yellow-100',
  'bg-sky-100',
  'bg-emerald-100',
  'bg-rose-100',
  'bg-violet-100',
];

const colorsDark = [
  'bg-yellow-200',
  'bg-sky-200',
  'bg-emerald-200',
  'bg-rose-200',
  'bg-violet-200',
];
const ProjectCard: React.FunctionComponent<{
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  index: number;
}> = ({ title, subtitle, description, image, link, index }) => {
  const colorIndex = index % colorsLight.length;
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div
      className={`${transitionClass} ${mainDivClasses} h-[300px] w-[90%] border border-zinc-400 justify-self-center`}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => window.open(link, '_blank')}
    >
      <div
        className={`${transitionClass}  ${
          hover ? 'h-0' : 'h-2/3'
        } rounded-t-lg`}
      >
        <img
          className="rounded-t-lg h-full w-full"
          style={{ zIndex: '0' }}
          src={!hover ? `images${image}` : ''}
        />
      </div>
      <div
        className={`${transitionClass}  ${hover ? 'h-full' : 'h-1/3'} ${
          hover ? colorsDark[colorIndex] : colorsLight[colorIndex]
        } p-1 hover:rounded-lg rounded-b-lg border border-zinc-300`}
        style={{ zIndex: '1' }}
      >
        <p className="mb-1 font-bold">{title}</p>
        {hover ? description : subtitle}
      </div>
    </div>
  );
};

export default ProjectCard;
