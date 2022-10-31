import React from 'react';

import { FrontPage } from './components/pages';

const App = () => {
  return (
    <div className="bg-lime-50 h-screen m-0 p-0">
      <div>{/**This space reserved for Navbar */}</div>
      <div>
        {/**If we need a general page wrapper lets put it around this */}
        <FrontPage />
        <p>hello this is courier</p>
      </div>
    </div>
  );
};

export default App;
