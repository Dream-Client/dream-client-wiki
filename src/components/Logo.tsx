import React from 'react';

import classes from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={classes['container']}>
      <img
        src={process.env.PUBLIC_URL + 'logo192.png'}
        className={classes['logo']}
      ></img>
      <div className={classes['text']}>Dream Client</div>
    </div>
  );
};

export { Logo };
