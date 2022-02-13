import React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { posts } from "../mock/MockData";
import { FACULTY, OFFERING, POST_TYPE, STUDENT } from "../util/Consts";
import ProjectPost from "./ProjectPost";
import SeekingPost from "./SeekingPost";
import TabPanel from "./TabPanel";

const TabContent = ({activeTab}) =>
  <Box sx={{width: '100%', marginTop: 7}}>
    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
    </Box>
    <TabPanel value={activeTab} index={0}>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          {posts.map(post =>
            post[POST_TYPE] === OFFERING ? <ProjectPost post={post}/> : <SeekingPost post={post}/>
          )}
        </Grid>
      </Box>

    </TabPanel>
    <TabPanel value={activeTab} index={1}>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          {posts.filter(p => p.userType === STUDENT).map(post =>
            post[POST_TYPE] === OFFERING ? <ProjectPost post={post}/> : <SeekingPost post={post}/>
          )}
        </Grid>
      </Box>
    </TabPanel>
    <TabPanel value={activeTab} index={2}>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          {posts.filter(p => p.userType === FACULTY).map(post =>
            post[POST_TYPE] === OFFERING ? <ProjectPost post={post}/> : <SeekingPost post={post}/>
          )}
        </Grid>
      </Box>
    </TabPanel>
  </Box>

export default TabContent;
