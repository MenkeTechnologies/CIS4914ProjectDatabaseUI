import React from 'react';
import {
  ACTIVE_TAB,
  ADVISOR_READY,
  ALL_TAB,
  API_HOSTNAME,
  AVAILABILITY,
  DATE_POSTED,
  FACULTY_TAB,
  GRAY,
  MESSAGES_TAB,
  POST_TAB,
  PROJECT_LOOKING,
  PROJECT_TAB,
  SEEKING_TAB,
  SORT_BY,
  STATE,
  STUDENT_TAB,
  TITLE,
  USERNAME,
  WHITE
} from "../util/Consts";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
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


const AppNav = () => {

  const {
    [STATE]: {[ACTIVE_TAB]: activeTab, [SORT_BY]: sortBy, [USERNAME]: username, [API_HOSTNAME]: apiHostname},
    toggleDrawer,
    hideDrawer,
    hideDrawerAndSetTab,
    setSortBy,
    logoutUser
  } = React.useContext(GlobalState);

  const a11yProps = index => ({
    id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}`,
  });

  const handleSortByChange = (e) => {
    hideDrawer()
    setSortBy(e.target.value);
  };

  return <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
    <Toolbar variant="dense">
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}
                  onClick={toggleDrawer}>
        <MenuIcon/>
      </IconButton>
      <Typography variant="h6" color="inherit" component="div">
        <Typography variant="h6" color="inherit" component="div">
          {TITLE}
        </Typography>
      </Typography>
      <Tabs value={activeTab} onChange={hideDrawerAndSetTab} aria-label="basic tabs example" textColor={GRAY}
            TabIndicatorProps={{
              style: {
                backgroundColor: GRAY
              }
            }}

      >
        <Tab label="All" {...a11yProps(ALL_TAB)} />
        <Tab label="Student" {...a11yProps(STUDENT_TAB)} />
        <Tab label="Faculty" {...a11yProps(FACULTY_TAB)} />
        <Tab label="My Posts" {...a11yProps(POST_TAB)} />
        <Tab label="Project Post" {...a11yProps(PROJECT_TAB)} />
        <Tab label="Seeking Post" {...a11yProps(SEEKING_TAB)} />
        <Tab label="Messages" {...a11yProps(MESSAGES_TAB)} />
      </Tabs>

      <FormControl sx={{m: 1, minWidth: 120}}>
        <InputLabel sx={{color: WHITE}} id="demo-simple-select-helper-label">Sort By</InputLabel>
        <Select sx={{color: WHITE}}
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={sortBy}
                label="SortBy"
                onChange={handleSortByChange}
        >

          <MenuItem value={DATE_POSTED}>Date Posted</MenuItem>
          <MenuItem value={AVAILABILITY}>Availability</MenuItem>
          <MenuItem value={ADVISOR_READY}>Advisor Ready</MenuItem>
          <MenuItem value={PROJECT_LOOKING}>Project vs. Looking</MenuItem>
        </Select>
      </FormControl>

      <TextField sx={{label: {color: WHITE}, input: {color: WHITE}}} id="outlined-basic" label="Search text"
                 variant="outlined"
                 InputProps={{endAdornment: <SearchButton click={hideDrawer} color={WHITE}/>}}
      />

      <Box sx={{display: "flex", flex: "1", justifyContent: "flex-end"}}>
        <Typography variant="h6" color="inherit" component="div" sx={{mr: 1}}>
          {username}
        </Typography>
        <Button variant={"contained"} onClick={logoutUser} sx={{backgroundColor: GRAY}}>
          <Logout/>
          Logout
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
};

export default AppNav;
