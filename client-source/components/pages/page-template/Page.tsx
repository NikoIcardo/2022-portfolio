import React from 'react';
import Header from './Header';

export default function Page({
  title,
  header,
  description,
  body,
}: {
  title?: string;
  header?: string;
  description?: string;
  body: React.FunctionComponent;
}) {
  const Title: React.FunctionComponent = () => (
    <div className="mr-3 ml-3 mb-3 mt-0 pt-0">
      {!!title && (
        <Header size="h1" gradient={true}>
          {title}
        </Header>
      )}
    </div>
  );

  const SecondaryHeader: React.FunctionComponent = () => (
    <div className="mt-5 mx-3 p-2">
      {!!header && <Header size="h2">{header}</Header>}
    </div>
  );

  const PageDescription: React.FunctionComponent = () => (
    <div className="m-5 p-3 border text-white">
      {!!description && <p>{description}</p>}
    </div>
  );

  const PageBody: React.FunctionComponent = () => (
    <div className="m-5 p-3 border flex  place-content-center">{body({})}</div>
  );
  return (
    <div>
      <Title />
      <SecondaryHeader />
      <PageDescription />
      <PageBody />
    </div>
  );
}
