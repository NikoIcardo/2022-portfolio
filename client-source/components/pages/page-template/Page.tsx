import React from 'react';
import Header from './Header';

export default function Page({
  MainLeftSide,
  MainRightSide,
  SubBody,
  Footer,
}: {
  MainLeftSide: React.FunctionComponent;
  MainRightSide: React.FunctionComponent;
  SubBody: React.FunctionComponent;
  Footer?: React.FunctionComponent;
}) {
  const mainContainerClass =
    'lg:grid lg:grid-cols-4 grid-flow-col gap-2 mx-2 h-full p-12';
  const mainContainerLarge = 'xl:grid-cols-12';

  const leftContainerClasses = 'lg:col-start-1 lg:col-span-2 my-2 p-2 h-full';
  const leftContainerXL = 'xl:col-start-1 xl:col-span-5';

  const rightContainerClasses = 'lg:col-start-3 lg:col-span-2 my-2 p-2 h-full';
  const rightContainerXL = 'xl:col-start-6 xl:col-span-full';

  // border-4 border-zinc-600
  const PageFirstRow: React.FunctionComponent = () => (
    <div className={[mainContainerClass, mainContainerLarge].join(' ')}>
      <div className={[leftContainerClasses, leftContainerXL].join(' ')}>
        <MainLeftSide />
      </div>
      <div className={[rightContainerClasses, rightContainerXL].join(' ')}>
        <MainRightSide />
      </div>
    </div>
  );

  const PageSecondaryContent = () => (
    <div className="mx-4">
      <SubBody />
    </div>
  );
  return (
    <div>
      <PageFirstRow />
      <PageSecondaryContent />
    </div>
  );
}
