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
  SubBody?: React.FunctionComponent;
  Footer?: React.FunctionComponent;
}) {
  // border-4 border-zinc-600
  const divClass = ' my-2 p-2 h-ful';
  const PageFirstRow: React.FunctionComponent = () => (
    <div className="grid grid-cols-5 gap-0 grid-flow-col width-100 mx-2 h-100">
      <div className={`col-span-2 ${divClass}`}>
        <MainLeftSide />
      </div>
      <div className={`col-span-3 ${divClass}`}>
        <MainRightSide />
      </div>
    </div>
  );
  return (
    <div>
      <PageFirstRow />
    </div>
  );
}
