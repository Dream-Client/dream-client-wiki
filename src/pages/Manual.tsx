import React from 'react';
import { Divider, Paper, Typography } from '@material-ui/core';

import classes from './Manual.module.scss';

const Manual = () => {
  return (
    <Paper className={classes['paper']}>
      <Typography variant="h3" className={classes['header']}>
        Manual
      </Typography>
      <Divider className={classes['divider']} />
      <Typography>
        <p>Coming soon...</p>
      </Typography>
    </Paper>
  );
};

export { Manual };
