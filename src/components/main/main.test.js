import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

Enzyme.configure({adapter: new Adapter()});

import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(() => ({
  currentGenre: `all`
}));

it(`Main correctly renders after relaunch`, () => {
  const mock = [
    {
      id: 1,
      title: `Aviator`,
      image: ``
    }
  ];

  const tree = shallow(
      <Provider store={store}>
        <Main
          films={mock}
          onClick={() => {}}
        />
      </Provider>
  );

  expect(tree).toMatchSnapshot();
});
