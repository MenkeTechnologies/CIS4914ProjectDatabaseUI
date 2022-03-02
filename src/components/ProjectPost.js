import React from 'react';
import Grid from "@mui/material/Grid";
import { Button, Chip, Stack } from "@mui/material";
import { ACTIVE_TAB, Item, MESSAGES_TAB, PROJECT_TAB, SORT_BY, STATE } from "../util/Consts";
import GlobalState from "../state/GlobalState";
import AccountCircle from "@mui/icons-material/AccountCircle"

const ProjectPost = ({
                       post: {
                         topic,
                         author: {name, type},
                         date,
                         summary,
                         skillsList,
                         softwareList,
                         memberList,
                         advisor
                       }
                     }) => {

  const {
    [STATE]: {[ACTIVE_TAB]: activeTab, [SORT_BY]: sortBy}, hideDrawer, handleNavChange, hideDrawerAndSetTab,
  } = React.useContext(GlobalState);

  return <Grid item xs={6}>
    <Item>
      <Item>

        <h1>
          <Stack direction="row" spacing={1}>
            {topic}
            <Chip label={type}/>
            <Chip label={date} variant="outlined"/>
            <Chip icon={<AccountCircle/>} label={name}/>
          </Stack>
        </h1>
        {summary}

        <Grid container item spacing={2}>
          <Grid item xs={6}>
            <h2>
              Skills
            </h2>
            {skillsList.join(", ")}
          </Grid>
          <Grid item xs={6}>
            <h2>
              Software
            </h2>
            {softwareList.join(", ")}
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

        {memberList.map(m => <div>{m}</div>)}

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
