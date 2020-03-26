import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(() => ({
  currentGenre: `all`
}));

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App />
        </Provider>,
        {
          createNodeMock: (element) => {
            if (element.type === `video`) {
              return {
                src: null,
                isMuted: null,
                poster: null
              };
            }
            return null;
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

