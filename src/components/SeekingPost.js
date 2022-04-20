import React from 'react';
import Grid from "@mui/material/Grid";
import { Typography, Chip } from "@mui/material";
import { BLUE } from "../util/Consts";
import moment from 'moment';

const SeekingPost = ({post: {title, date, summary, maximumMembers, preferredContact, memberList}}) => {

  return <Grid container spacing={3}>
    <Grid item xs={12} sx={{textAlign: "center"}}>
      <Typography variant="h4">{title}</Typography>
    </Grid>
    <Grid item xs={12} sx={{textAlign: "center"}}>
      <Chip label={moment(date).format("MM/DD/YYYY")} variant="outlined" sx={{backgroundColor: BLUE, color: "white"}}/>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h6">Contact: {preferredContact}</Typography>
    </Grid>
    <Grid item xs={12} sx={{marginBottom: "40px"}}>
      <Typography variant="body1">
        {summary}
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Grid container justifyContent={"space-between"}>
        <Grid item>
          <Chip label={"Send Message"} variant="outlined"
                sx={{minWidth: "90px", backgroundColor: BLUE, color: "white"}}/>
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
}

export default SeekingPost;
