import React from 'react';

import { FrontPage } from './components/pages';

const App = () => {
  return (
    <div>
      <div>{/**This space reserved for Navbar */}</div>
      <div>
        {/**If we need a general page wrapper lets put it around this */}
        <FrontPage />
      </div>
    </div>
  );
};

export default App;
