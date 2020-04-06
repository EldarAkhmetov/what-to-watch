import React from 'react';

import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});
import App from './app.jsx';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(() => ({
  currentGenre: `all`
}));

it(`App correctly renders after relaunch`, () => {
  const tree = shallow(
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
  );

  expect(tree).toMatchSnapshot();
});

