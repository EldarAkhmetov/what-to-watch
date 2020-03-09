import React from 'react';

import Main from '../main/main.jsx';

const movies = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`];

const App = () => {
  return <Main
    movies={movies}
    onClick={(evt) => {
      evt.preventDefault();
    }}
  />;
};

export default App;
