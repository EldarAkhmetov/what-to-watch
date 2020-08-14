import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import thunk from 'redux-thunk';
import {compose} from 'recompose';


import configureAPI from './server/configure-API.js';


import App from './components/app/app.jsx';
import {reducer as appReducer} from './reducer/app/reducer.js';
import {filmsReducer, filmsOperations} from './reducer/films/index.js';

const init = () => {

  const api = configureAPI((...args) => store.dispatch(...args));

  const rootReducer = combineReducers({
    app: appReducer,
    films: filmsReducer
  });

  const store = createStore(
      rootReducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

  store.dispatch(filmsOperations.loadFilms());

  ReactDOM.render(
      <Provider store={store}>
        <Router>
          <App />        
        </Router>        
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
