import React from 'react';
import { LEFT, TITLE, WHITE } from "../util/Consts";
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
import { AppBar } from "@mui/material";


const AppNav = ({state, activeTab, setActiveTab, toggleDrawer}) => {

  const [sortBy, setSortBy] = React.useState('');

  const a11yProps = index => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  });

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const handleSortByChange = (event) => {
    setSortBy(event.target.value)
  };

  return <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
    <Toolbar variant="dense">
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}
                  onClick={toggleDrawer(LEFT, !state[LEFT])}>
        <MenuIcon/>
      </IconButton>
      <Typography variant="h6" color="inherit" component="div">
        <Typography variant="h6" color="inherit" component="div">
          {TITLE}
        </Typography>
      </Typography>
      <Tabs value={activeTab} onChange={handleTabChange} aria-label="basic tabs example" textColor={"#ccc"}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#ccc"
              }
            }}

      >
        <Tab label="All" {...a11yProps(0)} />
        <Tab label="Student" {...a11yProps(1)} />
        <Tab label="Faculty" {...a11yProps(2)} />
        <Tab label="My Posts" {...a11yProps(3)} />
        <Tab label="Project Post" {...a11yProps(4)} />
        <Tab label="Seeking Post" {...a11yProps(5)} />
        <Tab label="Messages" {...a11yProps(6)} />
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

          <MenuItem value={"Date_Posted"}>Date Posted</MenuItem>
          <MenuItem value={"Availability"}>Availability</MenuItem>
          <MenuItem value={"Advisor_ready"}>Advisor Ready</MenuItem>
          <MenuItem value={"Project_Looking"}>Project vs. Looking</MenuItem>
        </Select>
      </FormControl>

      <TextField sx={{label: {color: WHITE}, input: {color: WHITE}}} id="outlined-basic" label="Search text"
                 variant="outlined"
                 InputProps={{endAdornment: <SearchButton/>}}
      />
    </Toolbar>
  </AppBar>
};

export default AppNav;
