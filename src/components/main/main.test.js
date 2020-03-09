import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

it(`Main correctly renders after relaunch`, () => {
  const mock = [`Aviator`];

  const tree = renderer
    .create(<Main
      movies={mock}
      onClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
