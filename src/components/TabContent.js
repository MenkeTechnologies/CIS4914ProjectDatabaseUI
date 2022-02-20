import React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { posts } from "../mock/MockData";
import { messages } from "../mock/MockData";
import { ACTIVE_TAB, FACULTY, OFFERING, POST_TYPE, SEEKING, STATE, STUDENT } from "../util/Consts";
import Message from "./Message";
import ProjectPost from "./ProjectPost";
import SeekingPost from "./SeekingPost";
import TabPanel from "./TabPanel";
import GlobalState from "../state/GlobalState";

const TabContent = () => {

  const {[STATE]: {[ACTIVE_TAB]: activeTab}} = React.useContext(GlobalState);

  return <Box sx={{width: '100%', marginTop: 7}}>
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
    <TabPanel value={activeTab} index={3}>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          {posts.filter(p => p.name === "John Doe").map(post =>
            post[POST_TYPE] === OFFERING ? <ProjectPost post={post}/> : <SeekingPost post={post}/>
          )}
        </Grid>
      </Box>
    </TabPanel>
    <TabPanel value={activeTab} index={4}>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          {posts.filter(p => p.postType === OFFERING).map(post =>
            post[POST_TYPE] === OFFERING ? <ProjectPost post={post}/> : <SeekingPost post={post}/>
          )}
        </Grid>
      </Box>
    </TabPanel>
    <TabPanel value={activeTab} index={5}>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          {posts.filter(p => p.postType === SEEKING).map(post =>
            post[POST_TYPE] === OFFERING ? <ProjectPost post={post}/> : <SeekingPost post={post}/>
          )}
        </Grid>
      </Box>
    </TabPanel>
    <TabPanel value={activeTab} index={6}>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          {messages.map(message =>
            <Message message={message}/>
          )}
        </Grid>
      </Box>
    </TabPanel>
  </Box>
}

export default TabContent;
