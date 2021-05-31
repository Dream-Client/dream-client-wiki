import React from 'react';
import { Divider, Paper, Typography } from '@material-ui/core';

import classes from './Setup.module.scss';

const Setup = () => {
  return (
    <Paper className={classes['paper']}>
      <Typography variant="h3" className={classes['header']}>
        Setup Guide
      </Typography>
      <Divider className={classes['divider']} />
      <Typography>
        <p>YES</p>
      </Typography>
    </Paper>
  );
};

export { Setup };
