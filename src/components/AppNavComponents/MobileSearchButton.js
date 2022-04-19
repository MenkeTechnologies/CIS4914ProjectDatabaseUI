import { Grid, Tooltip, IconButton, Menu, MenuItem, ToggleButtonGroup, ToggleButton, Typography, Checkbox, Divider, TextField, Button } from "@mui/material"
import Search from '@mui/icons-material/Search';
import { useState, useContext } from "react"
import {
    POST_TYPE, SEEKING, OFFERING, DATE_POSTED, DATE_ASC, DATE_DESC, AVAILABILITY, PROJECT_AVAILABLE_ONLY,
    PROJECT_ALL_AVAILABILITY, ADVISOR_READY, PROJECT_ADVISED_ONLY, PROJECT_ALL_ADVISEMENT, SEARCH_VALUE, BLUE
} from "../../util/Consts";
import GlobalState from "../../state/GlobalState";

const MobileSearchButton = () => {
    const { setFullSort } = useContext(GlobalState);

    const [anchorEl, setAnchorEl] = useState(null);
    const [projectTypeSort, setProjectTypeSort] = useState(null);
    const [projectDateSort, setProjectDateSort] = useState(null);
    const [projectAvailabilitySort, setProjectAvailabilitySort] = useState(false);
    const [projectAdvisorSort, setProjectAdvisorSort] = useState(false);
    const [searchString, setSearchString] = useState("");

    const handleSearch = () => {
        setFullSort({
            [POST_TYPE]: projectTypeSort,
            [DATE_POSTED]: projectDateSort,
            [AVAILABILITY]: projectAvailabilitySort ? PROJECT_AVAILABLE_ONLY : PROJECT_ALL_AVAILABILITY,
            [ADVISOR_READY]: projectAdvisorSort ? PROJECT_ADVISED_ONLY : PROJECT_ALL_ADVISEMENT,
            [SEARCH_VALUE]: searchString
        });
        handleSortClose();
    }

    const handleSortClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleSortClose = () => {
        setAnchorEl(null);
    };

    return <Grid item>
        <Grid container justifyContent={"flex-end"}>
            <Tooltip title={"Sort / Filter"}>
                <IconButton sx={{ color: 'white', paddingRight: 0 }}>
                    <Search onClick={handleSortClick} />
                </IconButton>
            </Tooltip>
        </Grid>

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
            transformOrigin={{ horizontal: "center", vertical: "top" }}
            anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        >

            <Divider textAlign="center" sx={{ mb: 1 }}>&#8288;Sort and Filter</Divider> {/* Empty char for idiotic issue where typing "s" in search changes focus to divider... */}
            <Grid container flexDirection={"column"} >
                <MenuItem style={{ backgroundColor: 'transparent', m: 1 }}>
                    <TextField
                        id={SEARCH_VALUE}
                        value={searchString}
                        onChange={event => setSearchString(event.target.value)}
                        placeholder="Add Search Keywords"
                        type="search"
                        variant="outlined"
                        style={{ color: BLUE }}
                        fullWidth
                    />
                </MenuItem>
                <MenuItem>
                    <ToggleButtonGroup
                        color="primary"
                        value={projectTypeSort}
                        exclusive
                        onChange={event => { event.target.value === projectTypeSort ? setProjectTypeSort(null) : setProjectTypeSort(event.target.value) }}
                    >
                        <ToggleButton id={POST_TYPE} value={OFFERING}>Project Posts</ToggleButton>
                        <ToggleButton id={POST_TYPE} value={SEEKING}>Seeking Posts</ToggleButton>
                    </ToggleButtonGroup>
                </MenuItem>
                <MenuItem>
                    <Grid container flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                        <Grid item>
                            <Typography style={{ fontSize: ".875rem" }}>SORT POSTED DATE</Typography>
                        </Grid>
                        <Grid item>
                            <ToggleButtonGroup
                                color="primary"
                                value={projectDateSort}
                                exclusive
                                onChange={event => { event.target.value === projectDateSort ? setProjectDateSort(null) : setProjectDateSort(event.target.value) }}
                            >
                                <ToggleButton id={DATE_POSTED} value={DATE_ASC}>ASC</ToggleButton>
                                <ToggleButton id={DATE_POSTED} value={DATE_DESC}>DESC</ToggleButton>
                            </ToggleButtonGroup>
                        </Grid>
                    </Grid>
                </MenuItem>
                <MenuItem>
                    <Grid container flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                        <Grid item>
                            <Typography sx={{ fontSize: ".875rem" }}>ONLY CURRENTLY AVAILABLE</Typography>
                        </Grid>
                        <Grid item>
                            <Checkbox id={AVAILABILITY} checked={projectAvailabilitySort}
                                sx={{ paddingRight: 0 }}
                                onChange={event => { event.target.value === projectAvailabilitySort ? setProjectAvailabilitySort(null) : setProjectAvailabilitySort(event.target.value) }} />
                        </Grid>
                    </Grid>
                </MenuItem>
                <MenuItem>
                    <Grid container flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
                        <Grid item>
                            <Typography sx={{ fontSize: ".875rem" }}>ONLY CURRENTLY ADVISED</Typography>
                        </Grid>
                        <Grid item>
                            <Checkbox id={ADVISOR_READY} checked={projectAdvisorSort}
                                sx={{ paddingRight: 0 }}
                                onChange={event => { event.target.value === projectAdvisorSort ? setProjectAdvisorSort(null) : setProjectAdvisorSort(event.target.value) }} />
                        </Grid>
                    </Grid>
                </MenuItem>
                <MenuItem sx={{ mt: 1 }}>
                    <Grid container justifyContent={"center"}>
                        <Button type="text" variant={"outlined"} onClick={handleSearch}>Search</Button>
                    </Grid>
                </MenuItem>
            </Grid>
        </Menu>

    </Grid>
}

export default MobileSearchButton;