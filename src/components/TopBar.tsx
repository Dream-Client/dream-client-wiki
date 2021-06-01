import React from 'react';
import { AppBar, Typography } from '@material-ui/core';

import classes from './TopBar.module.scss';
import { Logo } from './Logo';
import { NavLink } from 'react-router-dom';

const TopBar = () => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      classes={{
        root: classes['root'],
        colorPrimary: classes['color-primary'],
      }}
    >
      <div className={classes['corner']}>
        <Logo />
      </div>
      <div className={classes['options']}>
        <div className={classes['option']}>
          <a href="https://dreamclient.ovh">HOME</a>
        </div>

        <div className={[classes['option']].join(' ')}>
          <NavLink exact to="/" activeClassName={classes['option-selected']}>
            WIKI
          </NavLink>
        </div>
        {/* <div className={classes['option']}>TOS</div> */}
      </div>
    </AppBar>
  );
};

export { TopBar };
