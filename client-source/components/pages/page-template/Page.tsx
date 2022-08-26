import React from 'react';
import Header from './Header';

export default function Page({
  title,
  secondaryText,
  pageHeader,
  body,
}: {
  title?: string;
  secondaryText?: string;
  pageHeader?: string | React.FunctionComponent;
  body: React.FunctionComponent;
}) {
  const Title: React.FunctionComponent = () => (
    <div className="mr-3 ml-3 mb-3 mt-0 pt-0">
      <Header size="h1" gradient={true}>
        {title || 'Typing Battle'}
      </Header>
    </div>
  );

  const SecondaryText: React.FunctionComponent = () => (
    <div className="mt-5 mx-3 p-2">
      {!!secondaryText && <Header size="h2">{secondaryText}</Header>}
    </div>
  );

  const PageHeader: React.FunctionComponent = () => (
    <div className="m-5 p-3 border text-white">
      {!!pageHeader &&
        (typeof pageHeader === 'string' ? <p>{pageHeader}</p> : pageHeader({}))}
    </div>
  );

  const PageBody: React.FunctionComponent = () => (
    <div className="m-5 p-3 border flex  place-content-center">{body({})}</div>
  );
  return (
    <div>
      <Title />
      <SecondaryText />
      <PageHeader />
      <PageBody />
    </div>
  );
}
