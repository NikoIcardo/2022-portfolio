import React from 'react';

import { FrontPage } from './components/pages';

const App = () => {
  return (
    <>
      <div className="font-main text-zinc-700 h-auto m-0 p-0 ">
        <div className="backdrop-blur-sm">
          <FrontPage />
        </div>
      </div>
    </>
  );
};

export default App;
