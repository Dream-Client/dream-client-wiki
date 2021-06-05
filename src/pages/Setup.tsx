import React from 'react';
import { Divider, Paper, Typography } from '@material-ui/core';

import classes from './Setup.module.scss';
import { Downloads } from './components/Downloads';

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
      <ul>
        <li>First off, you'll need the files. Get them here:</li>
        <Downloads />
        <li>
          Extract the contents of archive to your VRChat folder (location should
          be similar to this): <code>D:\Steam\steamapps\common\VRChat</code>
        </li>
        <li>
          <p>
            If you did everything properly, highlighted files should appear in
            your VRChat folder:
          </p>
          <img
            src={process.env.PUBLIC_URL + 'images/setup_files.png'}
            alt="setup_files"
          />
        </li>
        <li>
          <p>
            Go to <code>DreamVR\Preferences</code> folder and open{' '}
            <code>licenses.txt</code> file. Paste your licence key in there.
          </p>
        </li>
        <li>
          <p>Now your game should be ready to run with dream client.</p>
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

export { Setup };
