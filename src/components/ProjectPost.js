import React from 'react';
import Grid from "@mui/material/Grid";
import { Button, Chip, Stack, Paper, Typography, List, ListItem, ListItemText } from "@mui/material";
import { ACTIVE_TAB, Item, MESSAGES_TAB, PROJECT_TAB, SORT_BY, STATE } from "../util/Consts";
import GlobalState from "../state/GlobalState";
import AccountCircle from "@mui/icons-material/AccountCircle";
import moment from 'moment'
import { grid } from '@mui/system';

<<<<<<< HEAD
const ProjectPost = ({ post: { topic, name, userType, date, summary, skillsList, softwareList, advisor, memberList } }) => {
=======
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
>>>>>>> 6dd2aafc0cb534ddb4b27d002e314d93c3dbd576

  const {
    [STATE]: { [ACTIVE_TAB]: activeTab, [SORT_BY]: sortBy }, hideDrawer, handleNavChange, hideDrawerAndSetTab,
  } = React.useContext(GlobalState);

  return <Grid item xs={6}>
<<<<<<< HEAD
    <Paper elevation={3}>
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <Typography variant="h4">{topic}</Typography>
=======
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
>>>>>>> 6dd2aafc0cb534ddb4b27d002e314d93c3dbd576
        </Grid>
        <Grid item xs={2}>
          <Chip label="Student" variant="outlined" />
        </Grid>
        <Grid item xs={2}>
          <Chip label={moment(date).format("MM/DD/YYYY")} variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            {summary}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Skills</Typography>
          <List>
            {skillsList.map((skill) => (
              <ListItem divider>
                <ListItemText>
                  <Typography variant="body1">{skill}</Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Software</Typography>
          <List>
            {softwareList.map((software) => (
              <ListItem divider>
                <ListItemText>
                  <Typography variant="body1">{software}</Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Advisor: {advisor ? advisor : ""}</Typography>
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


export default ProjectPost;
