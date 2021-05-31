import React from 'react';
import {
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@material-ui/core';

import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import classes from './NavBar.module.scss';
import { ExpandMore } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        root: classes['drawer-root'],
        paper: classes['drawer-paper'],
      }}
    >
      <Toolbar />
      <div className={classes['drawer-container']}>
        <List>
          <ListItem button onClick={handleClick}>
            <ListItemIcon className={classes['list-item-icon']}>
              <PowerSettingsNewIcon className={classes['icon']} />
            </ListItemIcon>
            <ListItemText primary={'Geting started'} />
            {open ? <ExpandMore /> : <NavigateNextIcon />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes['nested']}
                component={NavLink}
                to="/setup"
                activeClassName={classes['navlink-selected']}
              >
                <ListItemIcon className={classes['list-item-icon']}>
                  <SettingsIcon className={classes['icon']} />
                </ListItemIcon>
                <ListItemText primary="Setup" />
              </ListItem>
            </List>
          </Collapse>
        </List>
        <Divider />
        <List>
          <ListItem
            button
            component={NavLink}
            className={classes['navlink']}
            activeClassName={classes['navlink-selected']}
            to="/manual"
          >
            <ListItemIcon className={classes['list-item-icon']}>
              <MenuBookIcon className={classes['icon']} />
            </ListItemIcon>
            <ListItemText primary={'Manual'} />
            {/* {open ? <ExpandMore /> : <NavigateNextIcon />} */}
          </ListItem>
        </List>
        <Divider />
      </div>
    </Drawer>
  );
};

export { NavBar };
