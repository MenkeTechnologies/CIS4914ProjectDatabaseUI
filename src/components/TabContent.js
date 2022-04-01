/**
 * @file Tab content
 */

import React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { ACTIVE_TAB, EMAIL, FACULTY, OFFERING, POST_TYPE, STATE, STUDENT, USER_ID, USERNAME } from "../util/Consts";
import Message from "./Message";
import ProjectPost from "./ProjectPost";
import SeekingPost from "./SeekingPost";
import TabPanel from "./TabPanel";
import GlobalState from "../state/GlobalState";
import OfferingPostForm from "./OfferingPostForm";
import SeekingPostForm from "./SeekingPostForm";
import MessageForm from "./MessageForm";
import { getMsgs } from "../service/Message";
import { getPosts } from "../service/Post";

/**
 * @returns {JSX.Element}
 * @constructor
 */
const TabContent = () => {

  const {
    [STATE]: {
      [ACTIVE_TAB]: activeTab,
      [USER_ID]: userId,
      [EMAIL]: email,
      [USERNAME]: username
    }
  } = React.useContext(GlobalState);
  const [posts, setPosts] = React.useState([]);
  const [messages, setMessages] = React.useState([]);


  React.useEffect(() => {
    getMsgs().then(m => setMessages(m));
  }, [activeTab]);
  React.useEffect(() => {
    getPosts().then(p => setPosts(p));
  }, [activeTab]);

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
          {posts.filter(p => p.author.type === STUDENT).map(post =>
            post[POST_TYPE] === OFFERING ? <ProjectPost post={post}/> : <SeekingPost post={post}/>
          )}
        </Grid>
      </Box>
    </TabPanel>
    <TabPanel value={activeTab} index={2}>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          {posts.filter(p => p.author.type === FACULTY).map(post =>
            post[POST_TYPE] === OFFERING ? <ProjectPost post={post}/> : <SeekingPost post={post}/>
          )}
        </Grid>
      </Box>
    </TabPanel>
    <TabPanel value={activeTab} index={3}>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          {posts.filter(p => p.author.name === username).map(post =>
            post[POST_TYPE] === OFFERING ? <ProjectPost post={post}/> : <SeekingPost post={post}/>
          )}
        </Grid>
      </Box>
    </TabPanel>
    <TabPanel value={activeTab} index={4}>
      <Box sx={{flexGrow: 1}}>
        <OfferingPostForm/>
      </Box>
    </TabPanel>
    <TabPanel value={activeTab} index={5}>
      <Box sx={{flexGrow: 1}}>
        <SeekingPostForm/>
      </Box>
    </TabPanel>
    <TabPanel value={activeTab} index={6}>
      <Box sx={{flexGrow: 1}}>
        <MessageForm/>
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
