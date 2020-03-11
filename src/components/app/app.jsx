import React from 'react';

import Main from '../main/main.jsx';

import films from '../../mocks/films.js';

const App = () => {
  return <Main
    films={films}
  />;
};

export default App;
