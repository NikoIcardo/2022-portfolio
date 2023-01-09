import React, { useState } from 'react';
import Header from '../../page-template/Header';

const List: React.FunctionComponent<{
  heading: string;
  items: string[];
  link?: boolean;
  colorIndex?: number;
}> = ({ heading, items, link, colorIndex }) => {
  const [showList, setShowList] = useState<boolean>(false);
  // dynamic class names may not exist in tailwind :) https://tailwindcss.com/docs/content-configuration#dynamic-class-names

  const buttonClasses = `p-2 w-full rounded-lg border-b border-zinc-500`;
  const border =
    'border rounded-lg border-zinc-500 hover:border-zinc-900 w-full';

  return (
    <div className={`my-3 text-center  ${border} `}>
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
        <div className={`p-4 my-2 text-left`}>
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
