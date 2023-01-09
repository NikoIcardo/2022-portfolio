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
import TetrisContainer from './sub-components/TetrisContainer';
import Projects from './sub-components/Projects';

export default function FrontPage() {
  const rMSm = 'sm:h-auto';
  const rMLg = 'xl:h-auto';
  const leftMain: React.FunctionComponent = () => {
    return (
      <>
        <div
          className={`${rMLg} ${rMLg} bg-white text-left p-[2rem] my-0 mx-0`}
        >
          <div>
            <Header size="h2" children={'Niko Icardo'} />
            <Header size="h3" children={'Software Engineer'} />
          </div>
          <p className="my-4">
            Hello to all and welcome to my personal portfolio! To describe who I
            am on one page is probably the most difficult task in the world but
            what I can start with is that I love history, science, math,
            philosophy and programming. The latter of those things has become my
            career in which I can say I am mostly self taught in modern
            Javascript Frameworks and Web Technologies.
            <br />
            <br />
            My first position was as a software engineer with a company called
            SPJ Solutions that specialized in VMware NSX network virtualization
            Migrations from VMware NSX-V to VMware NSX-T and did so using a
            proprietary software named cITopus. cITopus is a full stack
            typescript application that utilizes React Redux/Thunk and
            Node.Js/Express with Sequelize PostgreSQL to facilitate migration
            tasks and data collection within a deployed docker instance in
            customer environments.
            <br />
            <br />
            My time there exposed me to all aspects of web development from
            Front End development and load time optimizations, Back End Service
            Development with NSX and VMware api's facilitating network
            automation and migration tasks, web hosting via docker instances and
            simple apache web servers and responsibility for developing highly
            scalable applications. In fact, my first few tasks there included
            developing the entirety of their Downloads Site to allow authorized
            users to download there Docker images and entirety of the Licensing
            application to authorize users and generate keys to allow use of
            cITopus.
            <br />
            <br />
            Although I thrived there and was quickly promoted to a Senior level
            position assisting Jr. Devs and taking on responsibilty of large
            feature integrations, economic downturns resulted in the cITopus
            team dissolving which has left me in search for a new job. An
            opportunity for a new beginning and chance to work with new and
            exciting software.
            <br />
            <br />A perfect position for me would be one that challenges me and
            exposes me to new technology and development techniques but provides
            me with plenty of opportunity to mature as a software engineer in
            web engineering whether it be on the BE, FE or both. I love learning
            and am quick to deploy new skills in production environments. I have
            no issue becoming and doing what it takes to master new languages or
            stacks and have a proven track record of writing clean and scalable
            code.
            <br />
            <br />I can provide references upon request and look forward to
            meeting with anyone interested in working with me. Please don't
            hessitate to reach out, I respond punctually.
          </p>

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
    <div className={`${rMLg} ${rMLg} bg-stone-500`}>
      {/* <Button text="<" />
      <Button text=">" /> */}

      {/* <TetrisContainer /> */}
      <Projects />
    </div>
  );

  const subBody: React.FunctionComponent = () => <></>;

  return (
    <Page MainLeftSide={leftMain} MainRightSide={rightMain} SubBody={subBody} />
  );
}
