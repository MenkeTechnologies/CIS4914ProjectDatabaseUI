import React from 'react';
import Grid from "@mui/material/Grid";
import { Button, Chip, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({theme}) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ProjectPost = ({post: {title, userType, date, details, skills, software, members, advisor}}) => {
  return (
    <Grid item xs={6}>
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

          {members.map(m =>
            <div>{m}</div>
          )}

        </Item>

        <Item>
          <Stack direction="row" spacing={1}>
            <Chip label="6/6 Members"/>
            <Button variant={"contained"}>Request to Join</Button>
            <Button variant={"contained"}>Edit</Button>
          </Stack>
        </Item>

      </Item>
    </Grid>
  );
};

export default ProjectPost;