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
  // border-4 border-zinc-600
  const PageFirstRow: React.FunctionComponent = () => (
    <div className="grid grid-cols-5 gap-0 grid-flow-col mx-2 ">
      <div className={`col-span-2 my-2 p-2`}>
        <MainLeftSide />
      </div>
      <div className={`col-span-3 my-2 p-2`}>
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
