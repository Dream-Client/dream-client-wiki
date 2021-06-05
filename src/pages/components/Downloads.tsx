import React from 'react';

import classes from './Downloads.module.scss';

const MEGA_URL =
  'https://mega.nz/file/J4MizBhB#wAezzUXxH9vwG64l09en6QLehGgxbrtIQk-zR2K1dmg';
const MEDIAFIRE_URL =
  'https://www.mediafire.com/file/l8x4n1n1d1h41lr/DreamClient.7z/file';

const Downloads = () => {
  return (
    <div className={classes['downloads']}>
      <div className={classes['option']}>
        <a href={MEGA_URL} target="_blank">
          <img
            src={process.env.PUBLIC_URL + 'images/04_MEGA_letter_logo.svg'}
          />
        </a>
      </div>
      <div className={classes['option']}>
        <a href={MEDIAFIRE_URL} target="_blank">
          <img
            src={process.env.PUBLIC_URL + 'images/MediaFire-Flame-color.png'}
          />
        </a>
      </div>
    </div>
  );
};

export { Downloads };
