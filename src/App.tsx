import React from 'react';
import { TopBar } from './components/TopBar';
import { StylesProvider } from '@material-ui/core';
import { NavBar } from './components/NavBar';
import { HashRouter, Route, Switch } from 'react-router-dom';

import classes from './App.module.scss';
import { Setup } from './pages/Setup';
import { Manual } from './pages/Manual';
import { Home } from './pages/Home';
import { LauncherUpgrade } from './pages/LauncherUpgrade';

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
            <Route exact path="/launcher-upgrade">
              <LauncherUpgrade />
            </Route>
            <Route exact path="/manual">
              <Manual />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </StylesProvider>
  );
}

export default App;
