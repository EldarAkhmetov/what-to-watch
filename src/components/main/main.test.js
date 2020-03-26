import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

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

  const tree = renderer
    .create(
        <Provider store={store}>
          <Main
            films={mock}
            onClick={() => {}}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
