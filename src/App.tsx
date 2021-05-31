import React from 'react';
import { TopBar } from './components/TopBar';
import { StylesProvider } from '@material-ui/core';
import { NavBar } from './components/NavBar';
import { HashRouter, Route, Switch } from 'react-router-dom';

import classes from './App.module.scss';
import { Setup } from './pages/Setup';
import { Manual } from './pages/Manual';

function App() {
  return (
    <StylesProvider injectFirst>
      <HashRouter>
        <TopBar />
        <NavBar />
        <div className={classes['toolbar']} />
        <div className={classes['content']}>
          <Switch>
            <Route exact path="/setup">
              <Setup />
            </Route>
            <Route exact path="/manual">
              <Manual />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </StylesProvider>
  );
}

export default App;
