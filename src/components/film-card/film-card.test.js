import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './film-card.jsx';

it(`App correctly renders after relaunch`, () => {
  const mock = {
    id: 1,
    title: `12`,
    image: ``
  };

  const onCardHover = () => {};

  const tree = renderer
    .create(<FilmCard
      film={mock}
      onCardHover={onCardHover}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
