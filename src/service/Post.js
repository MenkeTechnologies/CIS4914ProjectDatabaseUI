import axios from "axios";
import { getApiUrl, OFFERING, POST_TYPE, PROJECT_POST, SEEKING, SEEKING_POST } from "../util/Consts";

export const getPosts = () => {
  return getSeekingPost().then((sp) => {
    return getOfferingPost().then((op) => {
      return [...sp.map(p => ({
        ...p, [POST_TYPE]: SEEKING
      })), ...op.map(p => ({
        ...p, [POST_TYPE]: OFFERING
      }))
      ]
        ;
    }).catch((e) => {
      console.error(e);
      return []
    })
  }).catch((e) => {
    console.error(e);
    return []
  });
}

export const getSeekingPost = () =>
  axios.get(getApiUrl(SEEKING_POST))
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });

export const getOfferingPost = () =>
  axios.get(getApiUrl(PROJECT_POST))
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });

export const createSeekingPost = (project) =>

  axios.post(getApiUrl(SEEKING_POST), {
    date: Date.now,
    authorId: project.authorId,
    authorType: project.authorType,
    title: project.title,
    preferredContact: project.preferredContact,
    summary: project.summary,
    memberList: project.memberList
  })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });

export const createOfferingPost = (project) =>

  axios.post(getApiUrl(PROJECT_POST), {
    date: Date.now,
    authorId: project.authorId,
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
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });
