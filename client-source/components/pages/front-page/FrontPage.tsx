import React from 'react';
import Header from '../page-template/Header';
import Page from '../page-template/Page';
import Button from './sub-components/Button';

export default function FrontPage() {
  const pageHeader: React.FunctionComponent = () => {
    return (
      <div className="bg-zinc-300 h-300 p-2 ">
        <div>
          <Header size="h2" children={'Niko Icardo'} />
          <Header size="h3" children={'Software Engineer'} />
        </div>
        <p className="my-4">
          I have been coding throughout most of my life; from jr. high java
          projects, highschool java and web courses, c++ university courses,
          matlab and python modelling research at the university of Idaho, to a
          year of professional software engineering. I currently work with
          fullstack typescript applications in React and Express. I'm always
          looking to challenge myself and continue developing my skills as a
          professional software engineer.
        </p>
      </div>
    );
  };
  const body: React.FunctionComponent = () => {
    return (
      <div>
        <Button text="<" />
        <Button text=">" />
      </div>
    );
  };
  return <Page MainLeftSide={pageHeader} MainRightSide={body} />;
}
