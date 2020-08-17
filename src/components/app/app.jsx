import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Main from '../main/main.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import FilmPage from '../film-page/film-page.jsx';


const App = () => {
  return <Switch>
    <Route path='/' exact component={Main} />
    <Route path='/login' exact component={SignIn} />
    <Route path='/:film' exact component={FilmPage} />
  </Switch>;
};

export default App;
