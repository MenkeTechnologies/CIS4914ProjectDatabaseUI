import React from 'react';
import Grid from "@mui/material/Grid";
import { Button, Chip, Stack } from "@mui/material";
import { ACTIVE_TAB, Item, SORT_BY, STATE } from "../util/Consts";
import GlobalState from "../state/GlobalState";
import AccountCircle from '@mui/icons-material/AccountCircle';

const Message = ({message: {sender, date, subject, body}}) => {

  const {
    [STATE]: {[ACTIVE_TAB]: activeTab, [SORT_BY]: sortBy}, hideDrawer, handleNavChange, hideDrawerAndSetTab,
  } = React.useContext(GlobalState);

  return <Grid item xs="6">
    <Item>
      <h1>
        <Stack direction="row" spacing={5}>
          {subject}
          <Chip icon={<AccountCircle/>} label={sender.name}/>
          <Button variant={"contained"}>Reply</Button>
        </Stack>
      </h1>
      <Item>
        {date}
      </Item>
      <Item>
        {body}
      </Item>
    </Item>
  </Grid>
}


export default Message;
