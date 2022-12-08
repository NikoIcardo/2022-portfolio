import React, { useState } from 'react';
import Header from '../../page-template/Header';

const List: React.FunctionComponent<{
  heading: string;
  items: string[];
}> = ({ heading, items }) => {
  const [showList, setShowList] = useState<boolean>(false);

  const buttonClasses =
    'p-2 hover:bg-zinc-100 w-full rounded-lg border-b border-zinc-500';
  const border =
    'border rounded-lg border-zinc-500 hover:border-zinc-900 w-3/5';
  return (
    <div className={'my-3 text-left ' + border}>
      <button className={buttonClasses} onClick={() => setShowList(!showList)}>
        <Header size="h4" children={heading} />
      </button>
      {showList && (
        <div className="p-4 my-2">
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
