import React from 'react';
import { AppBar, Typography } from '@material-ui/core';

import classes from './TopBar.module.scss';
import { Logo } from './Logo';

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
        <div className={classes['option']}>HOME</div>
        <div
          className={[classes['option'], classes['option-selected']].join(' ')}
        >
          WIKI
        </div>
        <div className={classes['option']}>TOS</div>
      </div>
    </AppBar>
  );
};

export { TopBar };
