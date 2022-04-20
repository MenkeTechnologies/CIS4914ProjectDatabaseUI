import React from 'react';
import Box from "@mui/material/Box";
import {
  ALL_TAB,
  DRAWER_OPEN,
  LEFT,
  MESSAGES_TAB,
  PROJECT_TAB,
  SEEKING_TAB,
  STATE,
  FACULTY_STATISTICS_TAB,
  USER_POST_TAB
} from "../util/Consts";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import {
  Add,
  Dashboard,
  Logout,
  Mail,
  Person,
  Calculate
} from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import GlobalState from "../state/GlobalState";
/**
 * @file Drawer Nav
 */


/**
 * @returns {JSX.Element}
 * @constructor
 */
const DrawerNav = () => {

  const {
    [STATE]: {[DRAWER_OPEN]: open},
    toggleDrawer,
    handleNavChange,
    notRegistering

  } = React.useContext(GlobalState);

  const navItems = (anchor) => <Box
    sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 230}}
    role="presentation"
  >
    <List sx={{paddingTop: "0px"}}>

      <ListItem button onClick={handleNavChange(ALL_TAB)}>
        <ListItemIcon> <Dashboard/> </ListItemIcon>
        <ListItemText primary={'All Posts'}/>
      </ListItem>
      <ListItem button key={'Faculty_Statistics'} onClick={handleNavChange(FACULTY_STATISTICS_TAB)}>
        <ListItemIcon> <Calculate/> </ListItemIcon>
        <ListItemText primary={'Faculty Statistics'}/>
      </ListItem>

      <Divider/>

      <ListItem button onClick={handleNavChange(USER_POST_TAB)}>
        <ListItemIcon> <Person/> </ListItemIcon>
        <ListItemText primary={'My Posts'}/>
      </ListItem>
      <ListItem button onClick={handleNavChange(PROJECT_TAB)}>
        <ListItemIcon> <Add/> </ListItemIcon>
        <ListItemText primary={'Project Post'}/>
      </ListItem>
      <ListItem button onClick={handleNavChange(SEEKING_TAB)}>
        <ListItemIcon> <Add/> </ListItemIcon>
        <ListItemText primary={'Looking for Group Post'}/>
      </ListItem>
      <ListItem button onClick={handleNavChange(MESSAGES_TAB)}>
        <ListItemIcon> <Mail/> </ListItemIcon>
        <ListItemText primary={'Messages'}/>
      </ListItem>

    </List>

    <Divider/>

    <List>
      <ListItem button key={'Logout'} onClick={notRegistering}>
        <ListItemIcon> <Logout/> </ListItemIcon>
        <ListItemText primary={'Logout'}/>
      </ListItem>
    </List>
  </Box>

  return <Drawer variant="temporary"
                 anchor={LEFT}
                 open={open}
                 onClose={toggleDrawer}>
    <Toolbar/>
    {navItems(DRAWER_OPEN)}
  </Drawer>
};

export default DrawerNav;
