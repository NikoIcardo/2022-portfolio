import React from 'react';
import Page from '../page-template/Page';

export default function FrontPage() {
  const body: React.FunctionComponent = () => {
    return <div></div>;
  };
  return (
    <Page
      title="Typing Battle"
      header="Welcome to the front page!"
      description="Typing Battle"
      body={body}
    />
  );
}
