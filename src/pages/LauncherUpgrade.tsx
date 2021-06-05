import React from 'react';
import { Divider, Paper, Typography } from '@material-ui/core';

import classes from './LauncherUpgrade.module.scss';
import { Downloads } from './components/Downloads';

const LauncherUpgrade = () => {
  return (
    <Paper className={classes['paper']}>
      <Typography variant="h3" className={classes['header']} paragraph>
        Launcher Upgrade
      </Typography>
      <Divider className={classes['divider']} />
      <Typography variant="h4" paragraph>
        Unless stated otherwise, these steps should be enough!
      </Typography>
      <Divider className={classes['divider']} />
      <Typography variant="h4" paragraph>
        The Upgrade:
      </Typography>
      <ul>
        <li>First off, you'll need the latest files. Get them here:</li>
        <Downloads />
        <li>
          Extract the contents of archive to some folder (location doesn't
          matter)
        </li>
        <li>
          <p>Now open your VRChat folder in second window</p>
        </li>
        <li>
          <p>
            Now all you need to do is replace <code>winmm.dll</code> file in
            VRChat folder:
          </p>
          <img
            src={process.env.PUBLIC_URL + 'images/replace_winmm.png'}
            alt="replace_winmm"
          />
          <p>
            And <code>DreamConsole.exe</code> in <code>DreamVR</code> folder:
          </p>
          <img
            src={process.env.PUBLIC_URL + 'images/replace_dreamconsole.png'}
            alt="replace_dreamconsole"
          />
        </li>
        <li>
          <p>Now your game should be ready to run with new launcher.</p>
        </li>
      </ul>
      <Divider className={classes['divider']} />
      <p>
        <b>
          If despite following the instructions above you are experiencing
          issues or are confused, contact me or dream support members.
        </b>
      </p>
    </Paper>
  );
};

export { LauncherUpgrade };
