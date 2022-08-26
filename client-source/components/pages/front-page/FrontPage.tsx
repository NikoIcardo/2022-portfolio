import React from 'react';
import Page from '../page-template/Page';
import ModeButtons from './sub-components/ModeButton';

export default function FrontPage() {
  const pageHeader: React.FunctionComponent = () => {
    const divClass = 'text-bold text-lg text-white';
    const ListItem = ({ text }) => (
      <li className="hover:text-rose-400 p-1 m-4">{text}</li>
    );
    return (
      <div className="border flex">
        <div className={divClass}>
          <ul>
            {['Username:', 'Rank:', 'Keys:'].map((text) => (
              <ListItem text={text} />
            ))}
          </ul>
        </div>
        <div className={divClass}>
          <ul>
            {['W/L Ratio:', 'Total Words:', 'Total Errors:'].map((text) => (
              <ListItem text={text} />
            ))}
          </ul>
        </div>
      </div>
    );
  };
  const body: React.FunctionComponent = () => {
    return (
      <div>
        <ModeButtons />
      </div>
    );
  };
  return (
    <Page
      secondaryText="Welcome to the front page!"
      pageHeader={pageHeader}
      body={body}
    />
  );
}
