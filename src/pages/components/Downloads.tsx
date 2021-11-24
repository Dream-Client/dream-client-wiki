import React from 'react';

import classes from './Downloads.module.scss';

const MEGA_URL =
  'https://mega.nz/file/B99USSZB#VGFDVIx51Yrm0s2pziEMNMYHB_q7QXadlZ5rHyT4GQw';
const MEDIAFIRE_URL =
  'https://www.mediafire.com/file/l8x4n1n1d1h41lr/DreamClient.7z/file';

const Downloads = () => {
  return (
    <div className={classes['downloads']}>
      <div className={classes['option']}>
        <a href={MEGA_URL} target="_blank" rel="noreferrer">
          <img
            src={process.env.PUBLIC_URL + 'images/04_MEGA_letter_logo.svg'}
            alt="mega"
          />
        </a>
      </div>
      <div className={classes['option']}>
        <a href={MEDIAFIRE_URL} target="_blank" rel="noreferrer">
          <img
            src={process.env.PUBLIC_URL + 'images/MediaFire-Flame-color.png'}
            alt="mediafire"
          />
        </a>
      </div>
    </div>
  );
};

export { Downloads };
