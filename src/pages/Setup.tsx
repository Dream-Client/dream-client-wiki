import React from 'react';
import { Divider, Paper, Typography } from '@material-ui/core';

import classes from './Setup.module.scss';

const Setup = () => {
  return (
    <Paper className={classes['paper']}>
      <Typography variant="h3" className={classes['header']} paragraph>
        Setup Guide
      </Typography>
      <Divider className={classes['divider']} />
      <Typography variant="h4" paragraph>
        Before you start:
      </Typography>
      <ul>
        <li>
          Dream Client is designed to work as standalone modification, there is
          no support for cross-mod compatibility, however you may be able to run
          other mods alongside Dream.
        </li>
        <li>
          Dream Client uses <code>winmm.dll</code> to inject into game,
          therefore it's incompatible with other modifications working with{' '}
          <code>winmm.dll</code>. You will have to rename/remove 3rd party{' '}
          <code>winmm.dll</code> in such case.
        </li>
        <li>
          If you have modified <code>.dll</code> game files, Dream Client is not
          guaranteed to work.
        </li>
      </ul>
      <Divider className={classes['divider']} />
      <Typography variant="h4" paragraph>
        The Setup:
      </Typography>
      <Typography>
        <p>.</p>
      </Typography>
    </Paper>
  );
};

export { Setup };
