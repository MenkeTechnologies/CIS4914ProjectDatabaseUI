import { useState, useEffect } from 'react';
import Toolbar from "@mui/material/Toolbar";
import { AppBar, Grid, useMediaQuery } from "@mui/material";
import TitleHeader from './AppNavComponents/TitleHeader';
import DesktopButtonGroup from './AppNavComponents/DesktopButtonGroup';
import DesktopSearchGroup from './AppNavComponents/DesktopSearchGroup';
import MobileDrawerButton from './AppNavComponents/MobileDrawerButton';
import MobileSearchButton from './AppNavComponents/MobileSearchButton';


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

