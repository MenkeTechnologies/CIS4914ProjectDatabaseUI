import '../style/App.css';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Add, ArrowForward, Close, Dashboard, Mail } from "@mui/icons-material";
import Grid from '@mui/material/Grid';
import { FACULTY, LEFT, OFFERING, POST_TYPE, STUDENT, TITLE } from "../util/Consts";
import { posts } from "../mock/MockData";
import ProjectPost from "./ProjectPost";
import SeekingPost from "./SeekingPost";

const App = props => {
  const [state, setState] = React.useState({
    [LEFT]: false,
  });
  const [activeTab, setActiveTab] = React.useState(0);
  const [age, setAge] = React.useState('');


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({...state, [anchor]: open});
  };

  const TabPanel = props => {
    const {children, value, index, ...other} = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{p: 3}}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  const list = (anchor) => (
    <Box
      sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
      role="presentation"
    >
      <List>
        <ListItem button key={'Close'} onClick={toggleDrawer(anchor, false)}>
          <ListItemIcon> <Close/> </ListItemIcon>
          <ListItemText primary={'Close'}/>
        </ListItem>
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

  const a11yProps = index => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  });

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const SearchButton = () => (
    <IconButton>
      <SearchIcon/>
    </IconButton>
  )

  return (
    <div className="App">
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2}} onClick={toggleDrawer(LEFT, true)}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            <Typography variant="h6" color="inherit" component="div">
              {TITLE}
            </Typography>
          </Typography>
          <Tabs value={activeTab} onChange={handleChange} aria-label="basic tabs example" textColor={"#ccc"}
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#ccc"
                  }
                }}

          >
            <Tab label="All" {...a11yProps(0)} />
            <Tab label="Student" {...a11yProps(1)} />
            <Tab label="Faculty" {...a11yProps(2)} />
          </Tabs>

          <FormControl sx={{m: 1, minWidth: 120}}>
            <InputLabel id="demo-simple-select-helper-label">Sort By</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <TextField id="outlined-basic" label="Search text" variant="outlined"
                     InputProps={{endAdornment: <SearchButton/>}}
          />
        </Toolbar>
      </AppBar>
      <Box sx={{width: '100%', marginTop: 7}}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        </Box>
        <TabPanel value={activeTab} index={0}>
          <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
              {posts.map(post =>
                post[POST_TYPE] === OFFERING ? <ProjectPost post={post}/> : <SeekingPost post={post}/>
              )}
            </Grid>
          </Box>

        </TabPanel>
        <TabPanel value={activeTab} index={1}>
          <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
              {posts.filter(p => p.userType === STUDENT).map(post =>
                post[POST_TYPE] === OFFERING ? <ProjectPost post={post}/> : <SeekingPost post={post}/>
              )}
            </Grid>
          </Box>
        </TabPanel>
        <TabPanel value={activeTab} index={2}>
          <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
              {posts.filter(p => p.userType === FACULTY).map(post =>
                post[POST_TYPE] === OFFERING ? <ProjectPost post={post}/> : <SeekingPost post={post}/>
              )}
            </Grid>
          </Box>
        </TabPanel>
      </Box>

      <Drawer
        anchor={LEFT}
        open={state[LEFT]}
        onClose={toggleDrawer(LEFT, false)}
      >
        {list(LEFT)}
      </Drawer>
    </div>
  );
};

export default App;
