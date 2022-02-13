import React from 'react';
import Box from "@mui/material/Box";
import { LEFT } from "../util/Consts";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Add, ArrowForward, Dashboard, Mail } from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import SearchButton from "./SearchButton";


const DrawerNav = ({state, setState, toggleDrawer}) => {

  const list = (anchor) => (
    <Box
      sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
      role="presentation"
    >
      <List>

        <ListItem button key={'My Posts'}>

          <ListItemIcon> <Dashboard/> </ListItemIcon>
          <ListItemText primary={'My Posts'}/>
        </ListItem>

        <ListItem button key={'Project Post'}>
          <ListItemIcon> <Add/> </ListItemIcon>
          <ListItemText primary={'Project Post'}/>
        </ListItem>

        <ListItem button key={'Looking for Group Post'}>
          <ListItemIcon> <Add/> </ListItemIcon>
          <ListItemText primary={'Looking for Group Post'}/>
        </ListItem>

        <ListItem button key={'Messages'}>
          <ListItemIcon> <Mail/> </ListItemIcon>
          <ListItemText primary={'Messages'}/>
        </ListItem>

      </List>
      <Divider/>
      <List>
        <TextField id="outlined-basic" label="Search Name / UFID" variant="outlined"
                   InputProps={{endAdornment: <SearchButton/>}}/>
        {['Student 1', 'Student 2', 'Student 3'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text}/>
            <ListItemIcon>
              <ArrowForward/>
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer variant="temporary"
            anchor={LEFT}
            open={state[LEFT]}
            onClose={toggleDrawer(LEFT, false)}>
      <Toolbar/>
      {list(LEFT)}
    </Drawer>
  );
};

export default DrawerNav;
