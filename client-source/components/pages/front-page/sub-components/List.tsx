import React, { useState } from 'react';
import Header from '../../page-template/Header';

const colorsLight = [
  'bg-yellow-100',
  'bg-sky-100',
  'bg-emerald-100',
  'bg-rose-100',
  'bg-violet-100',
];

const colorsDarkHover = [
  'hover:bg-yellow-200',
  'hover:bg-sky-200',
  'hover:bg-emerald-200',
  'hover:bg-rose-200',
  'hover:bg-violet-200',
];

const List: React.FunctionComponent<{
  heading: string;
  items: string[];
  link?: boolean;
  colorIndex?: number;
}> = ({ heading, items, link, colorIndex }) => {
  const [showList, setShowList] = useState<boolean>(false);
  // dynamic class names may not exist in tailwind :) https://tailwindcss.com/docs/content-configuration#dynamic-class-names

  const color1 =
    typeof colorIndex === 'number'
      ? colorsLight[colorIndex % colorsLight.length]
      : 'zinc';

  const color2 =
    typeof colorIndex === 'number'
      ? colorsDarkHover[colorIndex % colorsDarkHover.length]
      : 'bg-zinc-100';

  const color3 =
    typeof colorIndex === 'number'
      ? colorsLight[(colorIndex + 2) % colorsLight.length]
      : 'zinc';
  const buttonClasses = `p-2 w-full rounded-lg border-b border-zinc-500 ${color1} ${color2}`;
  const border =
    'border rounded-lg border-zinc-500 hover:border-zinc-900 w-3/5';

  return (
    <div className={`my-3 text-left ${border} ${showList && `${color3}`}`}>
      <button
        className={`${buttonClasses} `}
        onClick={() => setShowList(!showList)}
      >
        {link ? (
          <a href={items[0]} target="_blank">
            <Header size="h4" children={heading} />
          </a>
        ) : (
          <Header size="h4" children={heading} />
        )}
      </button>
      {!link && showList && (
        <div className={`p-4 my-2`}>
          <ul className="ml-3 list-disc">
            {items.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default List;
