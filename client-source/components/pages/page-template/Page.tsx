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
  const PageFirstRow: React.FunctionComponent = () => (
    <div className="grid grid-cols-5 gap-1 grid-flow-col width-100 m-2">
      <div className="col-span-2 border-4 border-slate-300">
        <MainLeftSide />
      </div>
      <div className="col-span-3 border-4 border-slate-300">
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
