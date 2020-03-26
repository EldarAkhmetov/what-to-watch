import React from 'react';
import renderer from 'react-test-renderer';
import {FilmList} from './film-list.jsx';

it(`Film list correctly renders after relaunch`, () => {
  const mock = [
    {
      id: 1,
      title: `12`,
      image: ``,
      genre: ``
    }
  ];

  const tree = renderer
    .create(<FilmList
      films={mock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
