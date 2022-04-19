import { useState, useEffect } from 'react';
import Toolbar from "@mui/material/Toolbar";
<<<<<<< HEAD
import { AppBar, Grid, useMediaQuery } from "@mui/material";
import TitleHeader from './AppNavComponents/TitleHeader';
import DesktopButtonGroup from './AppNavComponents/DesktopButtonGroup';
import DesktopSearchGroup from './AppNavComponents/DesktopSearchGroup';
import MobileDrawerButton from './AppNavComponents/MobileDrawerButton';
import MobileSearchButton from './AppNavComponents/MobileSearchButton';
=======
import SearchButton from "./SearchButton";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { AppBar, Button } from "@mui/material";
import GlobalState from "../state/GlobalState";
import Box from "@mui/material/Box";
import { Logout } from "@mui/icons-material";
/**
 * @file App Nav component
 */
>>>>>>> 2953e21be1c062eb47e365b1adcb9221044fd297


/**
 * @returns {JSX.Element}
 * @constructor
 */
const AppNav = () => {

  const desktopSize = useMediaQuery('(min-width:1150px)');

  return <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <Toolbar variant="dense">
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        {desktopSize ?
          <>
            <TitleHeader usingDesktopSize={desktopSize} />
            <DesktopButtonGroup />
            <DesktopSearchGroup /></>
          :
          <>
            <MobileDrawerButton />
            <TitleHeader usingDesktopSize={desktopSize} />
            <MobileSearchButton />
          </>
        }
      </Grid>
    </Toolbar>
  </AppBar >
};

export default AppNav;

