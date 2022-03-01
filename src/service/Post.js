import axios from "axios";
import { getApiUrl, PROJECT_POST, SEEKING_POST } from "../util/Consts";

export const getPosts = () => {
  return {
    ...getSeekingPost(),
    ...getOfferingPost()
  }
}

export const getSeekingPost = () => {

  axios.get(getApiUrl(SEEKING_POST))
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
}

export const getOfferingPost = () => {

  axios.get(getApiUrl(PROJECT_POST))
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
}

export const createSeekingPost = (project) => {

  axios.post(getApiUrl(SEEKING_POST), {
    date: Date.now,
    authorType: project.authorType,
    title: project.title,
    preferredContact: project.preferredContact,
    summary: project.summary,
    memberList: project.memberList
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}

export const createOfferingPost = (project) => {

  axios.post(getApiUrl(PROJECT_POST), {
    date: Date.now,
    authorType: project.authorType,
    topic: project.topic,
    preferredContact: project.preferredContact,
    summary: project.summary,
    skillsList: project.skillsList,
    softwareList: project.softwareList,
    advisor: project.advisor,
    memberList: project.memberList
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}
