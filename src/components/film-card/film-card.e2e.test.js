import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmCard from './film-card';

Enzyme.configure({adapter: new Adapter()});

it(`Callback function launches after article is clicked`, () => {
  const clickHandler = jest.fn();
  const mock = {
    id: 1,
    title: `Filthy Eight`,
    image: ``
  };

  const tree = shallow(<FilmCard
    film={mock}
    onCardHover={clickHandler}
  />);

  const card = tree.find(`.small-movie-card`);
  card.simulate(`mouseEnter`);

  expect(clickHandler).toHaveBeenCalledWith(mock.id);
});
