import React from 'react';
import Grid from "@mui/material/Grid";
import { Chip, Typography, List, ListItem, ListItemText } from "@mui/material";
import { BLUE } from "../util/Consts";
import moment from 'moment'

const ProjectPost = ({ post: { topic, name, userType, preferredContact, date, summary, skillsList, softwareList, advisor, memberList, maximumMembers } }) => {

  return <>
    <Grid container justifyContent="center" sx={{ marginBottom: "30px" }}>
      <Grid item xs={11}>
        <Typography variant="h4" textAlign="center">{topic}</Typography>
      </Grid>
    </Grid>

    <Grid container justifyContent="center" spacing={2} sx={{ marginBottom: "30px" }}>
      <Grid item>
        <Chip label="Student" variant="outlined" sx={{ minWidth: "90px", backgroundColor: BLUE, color: "white" }} />
      </Grid>
      <Grid item >
        <Chip label={moment(date).format("MM/DD/YYYY")} variant="outlined" sx={{ minWidth: "90px", backgroundColor: BLUE, color: "white" }} />
      </Grid>
    </Grid>

    <Grid container sx={{ marginBottom: "40px" }}>
      <Grid item xs={12}>
        <Typography variant="body1" whiteSpace={"no-wrap"}>
          {summary}
        </Typography>
      </Grid>
    </Grid>

    <Grid container spacing={2} sx={{ marginBottom: "40px" }}>
      <Grid item xs={12} sm={6}>
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
      <Grid item xs={12} sm={6}>
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
    </Grid>

    <Grid container sx={{ marginBottom: "5px" }}>
      <Grid item xs={12}>
        <Typography variant="h6">Advisor: {advisor ? advisor : ""}</Typography>
      </Grid>
    </Grid>

    <Grid container sx={{ marginBottom: "40px" }}>
      <Grid item xs={12}>
        <Typography variant="h6">Contact: {preferredContact ? preferredContact : ""}</Typography>
      </Grid>
    </Grid>

    <Grid container justifyContent={"space-between"}>
      <Grid item>
        <Chip label={"Request Join"} variant="outlined" sx={{ minWidth: "90px", backgroundColor: BLUE, color: "white" }} />
      </Grid>
      <Grid item>
        <Chip label={memberList.length.toString() + "/" + maximumMembers} variant="outlined" sx={{ minWidth: "90px", backgroundColor: BLUE, color: "white" }} />
      </Grid>
    </Grid>
  </>

}


export default ProjectPost;
