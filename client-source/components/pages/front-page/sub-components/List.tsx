import React, { useState } from 'react';
import Header from '../../page-template/Header';

const List: React.FunctionComponent<{
  heading: string;
  items: string[];
  link?: boolean;
  colorIndex?: number;
}> = ({ heading, items, link, colorIndex }) => {
  const [showList, setShowList] = useState<boolean>(false);
  const colors = ['yellow', 'sky', 'emerald', 'rose', 'violet'];
  const color =
    typeof colorIndex === 'number'
      ? colors[colorIndex % colors.length]
      : 'zinc';
  const buttonClasses = `p-2 w-full rounded-lg border-b border-zinc-500 bg-${color}-200 hover:bg-${color}-100`;
  const border =
    'border rounded-lg border-zinc-500 hover:border-zinc-900 w-3/5';
  return (
    <div
      className={`my-3 text-left ${border} ${
        showList && `bg-${colors[(colorIndex! + 2) % colors.length]}-100`
      }`}
    >
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
