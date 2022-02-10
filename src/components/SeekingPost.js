import React from 'react';
import Grid from "@mui/material/Grid";
import { Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({theme}) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const SeekingPost = ({post: {title, details, name, contact}}) => {
  return (<Grid item xs={6}>
      <Item>
        <Item>
          <h1>
            <Stack direction="row" spacing={1}>
              {title}
            </Stack>
          </h1>
          {details}
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
                {contact}
              </h2>
            </Grid>
          </Grid>
        </Item>
        <Item>
          <Stack direction="row" spacing={1}>
            <Button variant={"contained"}>Add to My Group</Button>
            <Button variant={"contained"}>Message</Button>
          </Stack>
        </Item>
      </Item>
    </Grid>
  );
};

export default SeekingPost;
