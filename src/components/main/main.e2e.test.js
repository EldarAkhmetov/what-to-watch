import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Callback function launches after article is clicked`, () => {
  const clickHandler = jest.fn();
  const mock = [`We need to talk about Kevin`];

  const tree = shallow(<Main
    movies={mock}
    onClick={clickHandler}
  />);

  const startButton = tree.find(`.small-movie-card__title`);
  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
