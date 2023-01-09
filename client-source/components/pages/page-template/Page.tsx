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
    'm-0 h-[100%] p-0 md:grid md:grid-cols-4 lg:grid-cols-6 gap-0';

  const leftContainerClasses = 'w-full h-[100%] md:col-span-2 lg:col-span-2';
  const leftContainerXL = '';

  const rightContainerClasses = 'h-[%100] md:col-span-2 lg:col-span-4';
  const rightContainerXL = '';

  // border-4 border-zinc-600
  const PageFirstRow: React.FunctionComponent = () => (
    <div className={[mainContainerClass].join(' ')}>
      <div className={[leftContainerClasses, leftContainerXL].join(' ')}>
        <MainLeftSide />
      </div>
      <div className={[rightContainerClasses, rightContainerXL].join(' ')}>
        <MainRightSide />
      </div>
    </div>
  );

  const PageSecondaryContent = () => (
    <div className="">
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
