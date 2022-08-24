import React from 'react';

import { FrontPage } from './components/pages';

const App = () => {
  return (
    <div className="bg-slate-700 h-screen m-0 p-0">
      <div>{/**This space reserved for Navbar */}</div>
      <div>
        {/**If we need a general page wrapper lets put it around this */}
        <FrontPage />
      </div>
    </div>
  );
};

export default App;
