import * as React from 'react';
import LayoutStyles from './LayoutStyle'
import clsx from 'clsx';
import { mainList } from './sidebarList';
import {Divider, Drawer, IconButton, List, ThemeProvider} from "@mui/material";

const Sidebar = ({ open, toggleDrawer }) => {
  // const classes = LayoutStyles();
  // console.log(open, toggleDrawer)
  return (
    <>
      <Drawer
        variant="permanent"
        // classes={{
        //   paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        // }}
        open={open}
      >
        <div >
          <IconButton onClick={toggleDrawer}>
            {/*<ChevronLeftIcon />*/}
          </IconButton>
        </div>
        <Divider />
        {/* List isi sidebar ada di komponen sidebarList*/}
        <List>{mainList}</List>
      </Drawer>
    </>
  );
};
export default Sidebar;
