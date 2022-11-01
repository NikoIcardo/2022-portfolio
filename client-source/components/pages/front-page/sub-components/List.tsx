import React from 'react';
import Header from '../../page-template/Header';

const List: React.FunctionComponent<{
  heading: string;
  items: string[];
}> = ({ heading, items }) => {
  return (
    <div className="my-3">
      <Header size="h4" children={heading} />
      <ul className="ml-3 list-disc">
        {items.map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
