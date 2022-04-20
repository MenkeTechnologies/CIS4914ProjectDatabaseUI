import {
  Grid,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
  Checkbox,
  Divider,
  Input,
  InputAdornment
} from "@mui/material"
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import ClearIcon from '@mui/icons-material/Clear';
import { useState, useContext } from "react"
import {
  POST_TYPE, SEEKING, OFFERING, DATE_POSTED, DATE_ASC, DATE_DESC, AVAILABILITY, PROJECT_AVAILABLE_ONLY,
  PROJECT_ALL_AVAILABILITY, ADVISOR_READY, PROJECT_ADVISED_ONLY, PROJECT_ALL_ADVISEMENT, SEARCH_VALUE, GREYED_BLUE
} from "../../util/Consts";
import GlobalState from "../../state/GlobalState";

const DesktopSearchGroup = () => {

  const {
    hideDrawer,
    setSortBy,
    notRegistering
  } = useContext(GlobalState);

  const [anchorEl, setAnchorEl] = useState(null);
  const [projectTypeSort, setProjectTypeSort] = useState(null);
  const [projectDateSort, setProjectDateSort] = useState(null);
  const [projectAvailabilitySort, setProjectAvailabilitySort] = useState(false);
  const [projectAdvisorSort, setProjectAdvisorSort] = useState(false);
  const [searchString, setSearchString] = useState("");

  const handleSortByChange = (e, newSort) => {
    hideDrawer();
    switch (e.target.id) {
      case POST_TYPE:
        setProjectTypeSort(newSort);
        setSortBy(POST_TYPE, newSort);
        break;
      case DATE_POSTED:
        setProjectDateSort(newSort);
        setSortBy(DATE_POSTED, newSort);
        break;
      case AVAILABILITY:
        setProjectAvailabilitySort(newSort);
        setSortBy(AVAILABILITY, newSort ? PROJECT_AVAILABLE_ONLY : PROJECT_ALL_AVAILABILITY);
        break;
      case ADVISOR_READY:
        setProjectAdvisorSort(newSort);
        setSortBy(ADVISOR_READY, newSort ? PROJECT_ADVISED_ONLY : PROJECT_ALL_ADVISEMENT);
        break;
      default:
        console.log("Error with sort selection:" + e.target.id);
    }
  };

  const handleSortClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSortClose = () => {
    setAnchorEl(null);
  };
  const handleSearchClear = () => {
    setSearchString("");
    setSortBy(SEARCH_VALUE, "");
  };

  return <Grid item xs={4}>
    <Grid container justifyContent={"flex-end"}>
      <Tooltip title={"Sort / Filter"}>
        <IconButton sx={{color: 'white'}}>
          <FilterAltIcon onClick={handleSortClick}/>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleSortClose}
        PaperProps={{
          elevation: 1,
          sx: {
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1
          }
        }}
        transformOrigin={{horizontal: "center", vertical: "top"}}
        anchorOrigin={{horizontal: "left", vertical: "bottom"}}
      >
        <Divider textAlign="center" sx={{mb: 1}}>&#8288;Sort and
          Filter</Divider> {/* Empty char for idiotic issue where typing "s" in search changes focus to divider... */}
        <Grid container flexDirection={"column"}>
          <Grid item>
            <MenuItem>
              <ToggleButtonGroup
                color="primary"
                value={projectTypeSort}
                exclusive
                onChange={handleSortByChange}
              >
                <ToggleButton id={POST_TYPE} value={OFFERING}>Project Posts</ToggleButton>
                <ToggleButton id={POST_TYPE} value={SEEKING}>Seeking Posts</ToggleButton>
              </ToggleButtonGroup>
            </MenuItem>
          </Grid>
          <Grid item>
            <MenuItem>
              <Grid container alignItems={"center"} justifyContent={"space-between"}>
                <Grid item>
                  <Typography style={{fontSize: ".875rem"}}>DATE POSTED:</Typography>
                </Grid>
                <Grid item>
                  <ToggleButtonGroup
                    color="primary"
                    value={projectDateSort}
                    exclusive
                    onChange={handleSortByChange}
                  >
                    <ToggleButton id={DATE_POSTED} value={DATE_ASC}>ASC</ToggleButton>
                    <ToggleButton id={DATE_POSTED} value={DATE_DESC}>DESC</ToggleButton>
                  </ToggleButtonGroup>
                </Grid>
              </Grid>
            </MenuItem>
          </Grid>
          <Grid item>
            <MenuItem>
              <Grid container alignItems={"center"} justifyContent={"space-between"}>
                <Typography sx={{fontSize: ".875rem"}}>ONLY CURRENTLY AVAILABLE</Typography>
                <Checkbox id={AVAILABILITY} checked={projectAvailabilitySort} onChange={handleSortByChange}
                          sx={{paddingRight: 0}}/>
              </Grid>
            </MenuItem>
          </Grid>
          <Grid item>
            <MenuItem>
              <Grid container alignItems={"center"} justifyContent={"space-between"}>
                <Typography sx={{fontSize: ".875rem"}}>ONLY CURRENTLY ADVISED</Typography>
                <Checkbox id={ADVISOR_READY} checked={projectAdvisorSort} onChange={handleSortByChange}
                          sx={{paddingRight: 0}}/>
              </Grid>
            </MenuItem>
          </Grid>
        </Grid>
      </Menu>
      <Divider flexItem orientation="vertical" sx={{mt: 1, mb: 1, mr: 1}}/>
      <Input
        value={searchString}
        onChange={event => setSearchString(event.target.value)}
        placeholder="Search Projects"
        variant="search"
        sx={{
          color: "white",
          ':before': {borderBottomColor: 'transparent'},
          ':hover:not(.Mui-disabled):before': {borderBottomColor: GREYED_BLUE + ' !important'},
          ':after': {borderBottomColor: 'white'}
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleSearchClear}
                        sx={{color: searchString === "" ? 'transparent' : 'white', padding: 0}}>
              <ClearIcon fontSize={"small"}/>
            </IconButton>

          </InputAdornment>
        }
      />
      <IconButton onClick={() => setSortBy(SEARCH_VALUE, searchString)} sx={{color: 'white'}}>
        <SearchIcon/>
      </IconButton>
      <Divider flexItem orientation="vertical" sx={{mt: 1, mb: 1, mr: 1.75}}/>
      <Tooltip title="Logout">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 0}}
                    onClick={notRegistering}>
          <LogoutIcon/>
        </IconButton>
      </Tooltip>
    </Grid>
  </Grid>
}

export default DesktopSearchGroup;
