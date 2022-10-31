import React from 'react';
import Header from '../page-template/Header';
import Page from '../page-template/Page';
import ModeButtons from './sub-components/ModeButton';

export default function FrontPage() {
  const pageHeader: React.FunctionComponent = () => {
    const divClass = 'text-bold text-lg text-white';
    return (
      <div className={divClass}>
        <div>
          <Header size="h1" children={'Niko Icardo'} />
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
  return <Page MainLeftSide={pageHeader} MainRightSide={body} />;
}
