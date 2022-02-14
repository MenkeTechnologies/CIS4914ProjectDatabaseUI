import React from 'react';
import Box from "@mui/material/Box";
import { DRAWER_OPEN, LEFT, STATE } from "../util/Consts";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Add, ArrowForward, Dashboard, FilterAlt, Mail, Person } from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import SearchButton from "./SearchButton";
import GlobalState from "../state/GlobalState";


const DrawerNav = () => {

  const {[STATE]: {[DRAWER_OPEN]: open}, toggleDrawer, hideDrawerAndSetTab} = React.useContext(GlobalState);

  const handleNavChange = (tabIdx) => (e) => hideDrawerAndSetTab(e, tabIdx)

  const navItems = (anchor) => <Box
    sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
    role="presentation"
  >
    <List>

      <ListItem button key={'All'} onClick={handleNavChange(0)}>

        <ListItemIcon> <Person/> </ListItemIcon>
        <ListItemText primary={'All'}/>
      </ListItem>
      <ListItem button key={'Student'} onClick={handleNavChange(1)}>

        <ListItemIcon> <FilterAlt/> </ListItemIcon>
        <ListItemText primary={'Student'}/>
      </ListItem>
      <ListItem button key={'Faculty'} onClick={handleNavChange(2)}>

        <ListItemIcon> <FilterAlt/> </ListItemIcon>
        <ListItemText primary={'Faculty'}/>
      </ListItem>

      <ListItem button key={'My Posts'} onClick={handleNavChange(3)}>

        <ListItemIcon> <Dashboard/> </ListItemIcon>
        <ListItemText primary={'My Posts'}/>
      </ListItem>

      <ListItem button key={'Project Post'} onClick={handleNavChange(4)}>
        <ListItemIcon> <Add/> </ListItemIcon>
        <ListItemText primary={'Project Post'}/>
      </ListItem>

      <ListItem button key={'Looking for Group Post'} onClick={handleNavChange(5)}>
        <ListItemIcon> <Add/> </ListItemIcon>
        <ListItemText primary={'Looking for Group Post'}/>
      </ListItem>

      <ListItem button key={'Messages'} onClick={handleNavChange(6)}>
        <ListItemIcon> <Mail/> </ListItemIcon>
        <ListItemText primary={'Messages'}/>
      </ListItem>

    </List>
    <Divider/>
    <List>
      <TextField id="outlined-basic" label="Search Name / UFID" variant="outlined"
                 InputProps={{endAdornment: <SearchButton/>}}/>
      {['Student 1', 'Student 2', 'Student 3'].map((text, index) => <ListItem button key={text}>
        <ListItemText primary={text}/>
        <ListItemIcon>
          <ArrowForward/>
        </ListItemIcon>
      </ListItem>)}
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
