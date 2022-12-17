import React from 'react';
import Header from '../page-template/Header';
import Page from '../page-template/Page';
import Button from './sub-components/Button';
import List from './sub-components/List';

import {
  skills,
  SkillObject,
  professionalLinks,
  LinkObject,
} from './frontPageData';
import ProjectCard from './sub-components/ProjectCard';

export default function FrontPage() {
  const leftMain: React.FunctionComponent = () => {
    return (
      <>
        <div className="bg-zinc-300 p-4 rounded-lg">
          <div>
            <Header size="h2" children={'Niko Icardo'} />
            <Header size="h3" children={'Software Engineer'} />
          </div>
          <p className="my-4">
            I have been coding throughout most of my life: from jr. high java
            projects, highschool java and web courses, c++ university courses,
            matlab and python modelling research at the university of Idaho, to
            a year of professional software engineering. I currently work with
            fullstack typescript applications in React and Express. I'm always
            looking to challenge myself and continue developing my skills as a
            professional software engineer.
          </p>
        </div>

        <div className="bg-zinc-300 h-300 p-4 my-4 rounded-lg">
          <Header size="h3" children={'Professional Items'} />
          <div>
            {professionalLinks.map(
              ({ title, link }: LinkObject, index: number) => (
                <List
                  heading={title}
                  items={[link]}
                  link={true}
                  colorIndex={index}
                  key={title}
                />
              )
            )}
          </div>
        </div>

        <div className="bg-zinc-300 h-300 p-4 my-4 rounded-lg">
          <Header size="h3" children={'Skills and Technologies'} />
          <div>
            {skills.map(({ heading, items }: SkillObject, index: number) => (
              <List
                heading={heading}
                items={items}
                colorIndex={index}
                key={items[0]}
              />
            ))}
          </div>
        </div>
      </>
    );
  };
  const rightMain: React.FunctionComponent = () => (
    <div className="h-500">
      {/* <Button text="<" />
      <Button text=">" /> */}

      <ProjectCard />
    </div>
  );

  const subBody: React.FunctionComponent = () => <></>;

  return (
    <Page MainLeftSide={leftMain} MainRightSide={rightMain} SubBody={subBody} />
  );
}
