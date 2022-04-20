import { Grid, ButtonGroup, Button, Menu, MenuItem } from "@mui/material"
import {
  ALL_TAB,
  FACULTY_STATISTICS_TAB,
  MESSAGES_TAB,
  SEEKING_TAB,
  PROJECT_TAB,
  USER_POST_TAB,
  LIGHT_BLUE
} from "../../util/Consts";
import GlobalState from "../../state/GlobalState";
import { useContext, useState } from "react";

const DesktopButtonGroup = () => {

  const {hideDrawerAndSetTab, handleNavChange} = useContext(GlobalState);
  const [postsAnchorEl, setPostsAnchorEl] = useState(null);
  const [createAnchorEl, setCreateAnchorEl] = useState(null);

  const handleCreateClick = (event) => {
    setCreateAnchorEl(event.currentTarget);
  };
  const handleCreateClose = () => {
    setCreateAnchorEl(null);
  };
  const handlePostsClick = (event) => {
    setPostsAnchorEl(event.currentTarget);
  };
  const handlePostsClose = () => {
    setPostsAnchorEl(null);
  };
  const handleRedirect = (event, redirectTab) => {
    hideDrawerAndSetTab(event, redirectTab);
    handleCreateClose();
    handlePostsClose();
  };

  return <Grid item>

    <Menu
      anchorEl={createAnchorEl}
      open={Boolean(createAnchorEl)}
      onClose={handleCreateClose}
      PaperProps={{
        elevation: 1,
        sx: {
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1,
        }
      }}
      transformOrigin={{horizontal: "center", vertical: ""}}
      anchorOrigin={{horizontal: "center", vertical: "bottom"}}
    >
      <MenuItem style={{backgroundColor: 'transparent'}}>
        <Grid container direction="column" alignItems={"center"}>
          <Button type="text" color="inherit" size="small" fullWidth sx={{":hover": {backgroundColor: LIGHT_BLUE}}}
                  onClick={(e) => handleRedirect(e, PROJECT_TAB)}>Project Post</Button>
          <Button type="text" color="inherit" size="small" fullWidth sx={{":hover": {backgroundColor: LIGHT_BLUE}}}
                  onClick={(e) => handleRedirect(e, SEEKING_TAB)}>Seeking Group Post</Button>
        </Grid>
      </MenuItem>
    </Menu>

    <Menu
      anchorEl={postsAnchorEl}
      open={Boolean(postsAnchorEl)}
      onClose={handlePostsClose}
      PaperProps={{
        elevation: 1,
        sx: {
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1
        }
      }}
      transformOrigin={{horizontal: "center", vertical: ""}}
      anchorOrigin={{horizontal: "center", vertical: "bottom"}}
    >
      <MenuItem style={{backgroundColor: 'transparent'}}>
        <Grid container direction="column" alignItems={"center"}>
          <Button type="text" color="inherit" fullWidth sx={{":hover": {backgroundColor: LIGHT_BLUE}}} size="small"
                  onClick={(e) => handleRedirect(e, ALL_TAB)}>All Posts</Button>
          <Button type="text" color="inherit" fullWidth sx={{":hover": {backgroundColor: LIGHT_BLUE}}} size="small"
                  onClick={(e) => handleRedirect(e, USER_POST_TAB)}>My Posts</Button>
        </Grid>
      </MenuItem>
    </Menu>


    <ButtonGroup variant="text">
      <Button variant="text" color="inherit" size="small" onClick={handlePostsClick}>Posts</Button>
      <Button variant="text" color="inherit" size="small"
              onClick={handleNavChange(FACULTY_STATISTICS_TAB)}>Stats</Button>
      <Button variant="text" color="inherit" size="small" onClick={handleCreateClick}>Create</Button>
      <Button variant="text" color="inherit" size="small" onClick={handleNavChange(MESSAGES_TAB)}>Message</Button>
    </ButtonGroup>
  </Grid>
}

export default DesktopButtonGroup;
