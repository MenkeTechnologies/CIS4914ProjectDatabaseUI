import React from 'react';
import Box from "@mui/material/Box";
import {
  ALL_TAB,
  DK_GRAY,
  DRAWER_OPEN,
  FACULTY_TAB,
  LEFT,
  MESSAGES_TAB,
  POST_TAB,
  PROJECT_TAB,
  SEEKING_TAB,
  STATE,
  STUDENT_TAB
} from "../util/Consts";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import {
  Add,
  ArrowForward,
  Dashboard,
  FilterAlt,
  Logout,
  Mail,
  PeopleAlt,
  Person,
  YoutubeSearchedFor
} from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import SearchButton from "./SearchButton";
import GlobalState from "../state/GlobalState";


const DrawerNav = () => {

  const {
    [STATE]: {[DRAWER_OPEN]: open},
    toggleDrawer,
    hideDrawerAndSetTab,
    hideDrawer,
    handleNavChange,
    notRegistering

  } = React.useContext(GlobalState);

  const navItems = (anchor) => <Box
    sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
    role="presentation"
  >
    <List>

      <ListItem button key={'All'} onClick={handleNavChange(ALL_TAB)}>

        <ListItemIcon> <Person/> </ListItemIcon>
        <ListItemText primary={'All'}/>
      </ListItem>
      <ListItem button key={'Student'} onClick={handleNavChange(STUDENT_TAB)}>

        <ListItemIcon> <FilterAlt/> </ListItemIcon>
        <ListItemText primary={'Student'}/>
      </ListItem>
      <ListItem button key={'Faculty'} onClick={handleNavChange(FACULTY_TAB)}>

        <ListItemIcon> <FilterAlt/> </ListItemIcon>
        <ListItemText primary={'Faculty'}/>
      </ListItem>

      <Divider/>

      <ListItem button key={'My Posts'} onClick={handleNavChange(POST_TAB)}>

        <ListItemIcon> <Dashboard/> </ListItemIcon>
        <ListItemText primary={'My Posts'}/>
      </ListItem>

      <ListItem button key={'Project Post'} onClick={handleNavChange(PROJECT_TAB)}>
        <ListItemIcon> <Add/> </ListItemIcon>
        <ListItemText primary={'Project Post'}/>
      </ListItem>

      <ListItem button key={'Looking for Group Post'} onClick={handleNavChange(SEEKING_TAB)}>
        <ListItemIcon> <Add/> </ListItemIcon>
        <ListItemText primary={'Looking for Group Post'}/>
      </ListItem>

      <ListItem button key={'Messages'} onClick={handleNavChange(MESSAGES_TAB)}>
        <ListItemIcon> <Mail/> </ListItemIcon>
        <ListItemText primary={'Messages'}/>
      </ListItem>

    </List>
    <Divider/>
    <List>
      <ListItem>
        <ListItemIcon>
          <PeopleAlt/>
        </ListItemIcon>
        <ListItemText primary={"My Team Members"}/>
      </ListItem>

      {['Student 1', 'Student 2', 'Student 3'].map((text, index) => <ListItem button key={text}>
        <ListItemText primary={text}/>
        <ListItemIcon>
          <ArrowForward/>
        </ListItemIcon>
      </ListItem>)}

      <Divider/>

      <ListItem>
        <ListItemIcon>
          <YoutubeSearchedFor/>
        </ListItemIcon>
        <ListItemText primary={"User Search"}/>
      </ListItem>

      <TextField id="outlined-basic" label="Search Name / UFID" variant="outlined"
                 InputProps={{endAdornment: <SearchButton click={hideDrawer} color={DK_GRAY}/>}}/>

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
