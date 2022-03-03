import React from 'react';
import Grid from "@mui/material/Grid";
import { Button, Stack, Paper, Typography, Chip, List, ListItem, ListItemText } from "@mui/material";
import { ACTIVE_TAB, Item, MESSAGES_TAB, POST_TAB, SORT_BY, STATE } from "../util/Consts";
import GlobalState from "../state/GlobalState";
import moment from 'moment';

<<<<<<< HEAD
const SeekingPost = ({ post: { title, date, summary, name, preferredContact, memberList } }) => {
=======
const SeekingPost = ({post: {title, summary, author: {name, type}, preferredContact}}) => {
>>>>>>> 6dd2aafc0cb534ddb4b27d002e314d93c3dbd576

  const {
    [STATE]: { [ACTIVE_TAB]: activeTab, [SORT_BY]: sortBy }, hideDrawer, handleNavChange, hideDrawerAndSetTab,
  } = React.useContext(GlobalState);

  return <Grid item xs={6}>
<<<<<<< HEAD
    <Paper elevation={3}>
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <Typography variant="h4">{title}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Chip label={moment(date).format("MM/DD/YYYY")} variant="outlined" />
=======
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
>>>>>>> 6dd2aafc0cb534ddb4b27d002e314d93c3dbd576
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
