import React from 'react';
import Page from '../page-template/Page';
import ModeButtons from './sub-components/ModeButton';

export default function FrontPage() {
  const body: React.FunctionComponent = () => {
    return (
      <div>
        <ModeButtons />
      </div>
    );
  };
  return (
    <Page
      header="Welcome to the front page!"
      description="Typing Battle"
      body={body}
    />
  );
}
