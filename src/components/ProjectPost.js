import React from 'react';
import Grid from "@mui/material/Grid";
import { Button, Chip, Stack } from "@mui/material";
import { ACTIVE_TAB, Item, MESSAGES_TAB, PROJECT_TAB, SORT_BY, STATE } from "../util/Consts";
import GlobalState from "../state/GlobalState";

const ProjectPost = ({post: {title, userType, date, details, skills, software, members, advisor}}) => {

  const {
    [STATE]: {[ACTIVE_TAB]: activeTab, [SORT_BY]: sortBy}, hideDrawer, handleNavChange, hideDrawerAndSetTab,
  } = React.useContext(GlobalState);

  return <Grid item xs={6}>
    <Item>
      <Item>

        <h1>
          <Stack direction="row" spacing={1}>
            {title}
            <Chip label={userType}/>
            <Chip label={date} variant="outlined"/>
          </Stack>
        </h1>
        {details}

        <Grid container item spacing={2}>
          <Grid item xs={6}>
            <h2>
              Skills
            </h2>
            {skills}
          </Grid>
          <Grid item xs={6}>
            <h2>
              Software
            </h2>
            {software}
          </Grid>
        </Grid>

        <Grid container item spacing={2}>
          <Grid item xs={4}>
            <h2>
              Advisor
            </h2>
          </Grid>
          <Grid item xs={8}>
            <h2>
              {advisor}
            </h2>
          </Grid>
        </Grid>
        <h2>Members</h2>

        {members.map(m => <div>{m}</div>)}

      </Item>

      <Item>
        <Stack direction="row" spacing={1}>
          <Chip label="6/6 Members"/>
          <Button variant={"contained"} onClick={handleNavChange(MESSAGES_TAB)}>Request to Join</Button>
          <Button variant={"contained"} onClick={handleNavChange(PROJECT_TAB)}>Edit</Button>
        </Stack>
      </Item>

    </Item>
  </Grid>
}


export default ProjectPost;
