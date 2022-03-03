import React from 'react';
import Grid from "@mui/material/Grid";
import { Button, Stack } from "@mui/material";
import { ACTIVE_TAB, Item, MESSAGES_TAB, POST_TAB, SORT_BY, STATE } from "../util/Consts";
import GlobalState from "../state/GlobalState";

const SeekingPost = ({post: {title, summary, author: {name, type}, preferredContact, _id}}) => {

  const {
    [STATE]: {[ACTIVE_TAB]: activeTab, [SORT_BY]: sortBy}, hideDrawer, handleNavChange, hideDrawerAndSetTab,
  } = React.useContext(GlobalState);

  return <Grid item xs={6}>
    <Item>
      <Item>
        <h1>
          <Stack direction="row" spacing={1}>
            {title}
          </Stack>
        </h1>
        {summary}
        <Grid container item spacing={2}>
          <Grid item xs={4}>
            <h2>
              Name
            </h2>
          </Grid>
          <Grid item xs={8}>
            <h2>
              {name}
            </h2>
          </Grid>
        </Grid>
        <Grid container item spacing={2}>
          <Grid item xs={4}>
            <h2>
              Contact
            </h2>
          </Grid>
          <Grid item xs={8}>
            <h2>
              {preferredContact}
            </h2>
          </Grid>
        </Grid>
      </Item>
      <Item>
        <Stack direction="row" spacing={1}>
          <Button variant={"contained"} onClick={handleNavChange(POST_TAB)}>Add to My Group</Button>
          <Button variant={"contained"} onClick={handleNavChange(MESSAGES_TAB)}>Message</Button>
        </Stack>
      </Item>
    </Item>
  </Grid>;
}

export default SeekingPost;
