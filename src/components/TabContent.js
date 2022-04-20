/**
 * @file Tab content
 */

import React from 'react';
import { Grid, Paper, Box } from "@mui/material";
import {
  ACTIVE_TAB,
  ADVISOR_READY,
  AVAILABILITY,
  DATE_ASC,
  DATE_DESC,
  DATE_POSTED,
  OFFERING,
  POST_TYPE,
  PROJECT_ADVISED_ONLY,
  PROJECT_AVAILABLE_ONLY,
  SEEKING,
  SORT_BY,
  STATE,
  SEARCH_VALUE,
  USER_ID
} from "../util/Consts";
import Message from "./Message";
import ProjectPost from "./ProjectPost";
import SeekingPost from "./SeekingPost";
import TabPanel from "./TabPanel";
import GlobalState from "../state/GlobalState";
import OfferingPostForm from "./OfferingPostForm";
import SeekingPostForm from "./SeekingPostForm";
import MessageForm from "./MessageForm";
import FacultyStatistics from './FacultyStatistics';
import { getPosts } from "../service/Post";
import { getMessages } from "../service/Message";

/**
 * @returns {JSX.Element}
 * @constructor
 */
const TabContent = () => {

  const {[STATE]: {[ACTIVE_TAB]: activeTab, [SORT_BY]: sortBy, [USER_ID]: userId}} = React.useContext(GlobalState);

  const [filteredPosts, setFilteredPosts] = React.useState([]);
  const [allPosts, setAllPosts] = React.useState([]);
  const [messages, setMessages] = React.useState([]);

  React.useEffect(async () => {
    const msgs = await getMessages();
    setMessages(msgs);
  }, []);
  React.useEffect(async () => {
    const posts = await getPosts();
    setAllPosts(posts.slice().sort((a, b) => new Date(b.date) - new Date(a.date)));
  }, [activeTab]);
  React.useEffect(() => {
    let posts = allPosts;
    // console.log(sortBy);
    Object.entries(sortBy).forEach(filter => {
      const [filterType, filterValue] = filter;
      switch (filterType) {
        case POST_TYPE:
          if (filterValue === SEEKING) {
            posts = posts.filter(post => post.postType === SEEKING);
          } else if (filterValue === OFFERING) {
            posts = posts.filter(post => post.postType === OFFERING);
          }
          break;
        case DATE_POSTED:
          if (filterValue === DATE_ASC) {
            posts = posts.slice().sort(function (a, b) {
              return new Date(a.date) - new Date(b.date)
            });
          } else if (filterValue === DATE_DESC) {
            posts = posts.slice().sort(function (a, b) {
              return new Date(b.date) - new Date(a.date)
            });
          }
          break;
        case AVAILABILITY:
          if (filterValue === PROJECT_AVAILABLE_ONLY) {
            posts = posts.filter(post => post.memberList.length <= 6);
          }
          break;
        case ADVISOR_READY:
          if (filterValue === PROJECT_ADVISED_ONLY) {
            posts = posts.filter(post => post.advisor != null);
          }
          break;
        case SEARCH_VALUE:
          if (filterValue !== "") {

            posts = posts.filter(post => {
              let returnPost = null;

              if ((post[POST_TYPE] === SEEKING && post.title.toLowerCase().includes(filterValue.toLowerCase())) || (post[POST_TYPE] === OFFERING && post.topic.toLowerCase().includes(filterValue.toLowerCase()))) {
                returnPost = post;
              } else if (post.summary.toLowerCase().includes(filterValue.toLowerCase())) {
                returnPost = post;
              } else if (post.preferredContact.toLowerCase().includes(filterValue.toLowerCase())) {
                returnPost = post;
              } else if (post[POST_TYPE] === OFFERING) {
                post.skillsList.forEach(skill => {
                  if (skill.toLowerCase().includes(filterValue.toLowerCase())) {
                    returnPost = post;
                  }
                });
                post.softwareList.forEach(software => {
                  if (software.toLowerCase().includes(filterValue.toLowerCase())) {
                    returnPost = post;
                  }
                });
                if (post.advisor.toLowerCase().includes(filterValue.toLowerCase())) {
                  returnPost = post;
                }
              }

              return returnPost;
            });
          }
          break;

        default:
          console.log("Value in filter does not match with filterable attributes:" + filterType)
      }
    })

    setFilteredPosts(posts);

  }, [allPosts, sortBy]);

  return <Box sx={{width: '100%', marginTop: 7}}>

    <TabPanel value={activeTab} index={0}>
      <Grid container spacing={2}>
        {filteredPosts.map(post => <Grid item xs={12} md={6}>
          <Paper elevation={5} sx={{padding: "20px"}}>
            {post[POST_TYPE] === OFFERING ? <ProjectPost post={post}/> : <SeekingPost post={post}/>}
          </Paper>
        </Grid>)}
      </Grid>
    </TabPanel>

    <TabPanel value={activeTab} index={1}>
      <Grid container spacing={2}>
        {filteredPosts
          .filter(post => {
            if (post.author !== null && post.author._id === userId) return post;
          })
          .map(post => <Grid item xs={6} minWidth={"350px"}>
            <Paper elevation={5} sx={{padding: "20px"}}>
              {post[POST_TYPE] === OFFERING ? <ProjectPost post={post}/> : <SeekingPost post={post}/>}
            </Paper>
          </Grid>)}
      </Grid>
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
          {messages.map(message => <Message message={message}/>)}
        </Grid>
      </Box>
    </TabPanel>

    <TabPanel value={activeTab} index={7}>
      <FacultyStatistics posts={filteredPosts}/>
    </TabPanel>
  </Box>
}

export default TabContent;
