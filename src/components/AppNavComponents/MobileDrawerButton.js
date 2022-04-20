import { useContext } from "react";
import GlobalState from "../../state/GlobalState";
import { IconButton, Grid } from "@mui/material";
import Menu from "@mui/icons-material/Menu"

const MobileDrawerButton = () => {

  const {toggleDrawer} = useContext(GlobalState);

  return <Grid item>
    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
      <Menu/>
    </IconButton>
  </Grid>
}

export default MobileDrawerButton;
