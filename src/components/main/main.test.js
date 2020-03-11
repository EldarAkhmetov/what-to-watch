import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

it(`Main correctly renders after relaunch`, () => {
  const mock = [
    {
      id: 1,
      title: `Aviator`,
      image: ``
    }
  ];

  const tree = renderer
    .create(<Main
      films={mock}
      onClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});