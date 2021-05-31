import React from 'react';
import { Divider, Paper, Typography } from '@material-ui/core';

import classes from './Home.module.scss';

const Home = () => {
  return (
    <Paper className={classes['paper']}>
      <Typography variant="h3" className={classes['header']}>
        Dream Client Wiki
      </Typography>
      <Divider className={classes['divider']} />
      <Typography>
        <p>Select any section on the left 😎.</p>
      </Typography>
    </Paper>
  );
};

export { Home };
