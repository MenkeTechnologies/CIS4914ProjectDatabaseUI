import React from 'react';
import Grid from "@mui/material/Grid";
import { Button, Stack, Paper, Typography, Chip, List, ListItem, ListItemText } from "@mui/material";
import { ACTIVE_TAB, Item, MESSAGES_TAB, POST_TAB, SORT_BY, STATE } from "../util/Consts";
import GlobalState from "../state/GlobalState";
import moment from 'moment';

const SeekingPost = ({ post: { title, date, summary, name, preferredContact, memberList } }) => {

  const {
    [STATE]: { [ACTIVE_TAB]: activeTab, [SORT_BY]: sortBy }, hideDrawer, handleNavChange, hideDrawerAndSetTab,
  } = React.useContext(GlobalState);

  return <Grid item xs={6}>
    <Paper elevation={3}>
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <Typography variant="h4">{title}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Chip label={moment(date).format("MM/DD/YYYY")} variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">{"Student Name"}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">{preferredContact}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            {summary}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Members</Typography>
          <List>
            {memberList.map((member) => (
              <ListItem divider>
                <ListItemText>
                  <Typography variant="body1">{member.name} - {member.contact}</Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Paper>
  </Grid>
}

export default SeekingPost;
