import axios from "axios";
import { getApiUrl, OFFERING, POST_TYPE, PROJECT_POST, SEEKING, SEEKING_POST } from "../util/Consts";

export const getPosts = async () => {
  const seekingPosts = (await getSeekingPost()).map(p => ({...p, [POST_TYPE]: SEEKING}))
  //TODO get user name and user type from findUserById(_id)
  const offeringPosts = (await getOfferingPost()).map(p => ({...p, [POST_TYPE]: OFFERING}))
  //TODO get user name and user type from findUserById(_id)

  return [...seekingPosts, ...offeringPosts]
}

export const getSeekingPost = async () =>
  (await axios.get(getApiUrl(SEEKING_POST))).data

export const getOfferingPost = async () =>
  (await axios.get(getApiUrl(PROJECT_POST))).data

export const createSeekingPost = async (project) =>
  (await axios.post(getApiUrl(SEEKING_POST), {
    date: Date.now,
    authorId: project.authorId,
    authorType: project.authorType,
    title: project.title,
    preferredContact: project.preferredContact,
    summary: project.summary,
    memberList: project.memberList
  })).data

export const createOfferingPost = async (project) =>
  (await axios.post(getApiUrl(PROJECT_POST), {
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
  })).data
