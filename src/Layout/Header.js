import * as React from 'react';
import clsx from 'clsx';
import {AppBar, Badge, IconButton, Toolbar, Typography} from "@mui/material";
import { makeStyles } from '@mui/styles';
// import LayoutStyles from './LayoutStyle'

const drawerWidth = 240;
const LayoutStyles = makeStyles((theme) => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 100,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      backgroundColor:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[900],
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
}));

function MenuIcon() {
    return null;
}

const Header = ({ open, toggleDrawer }) => {
  const classes = LayoutStyles();
 
  return (
    <>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Header
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              {/*<NotificationsIcon />*/}
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
