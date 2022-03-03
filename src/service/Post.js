import axios from "axios";
import { getApiUrl, PROJECT_POST, SEEKING_POST } from "../util/Consts";

export const getAllPosts = async () => {
  const seekingPosts = await getSeekingPost();
  const offeringPosts = await getOfferingPost();

  return [...seekingPosts, ...offeringPosts]
}

export const getPosts = async () => await getAllPosts();

export const getSeekingPost = async () =>
  (await axios.get(getApiUrl(SEEKING_POST))).data

export const getOfferingPost = async () =>
  (await axios.get(getApiUrl(PROJECT_POST))).data

export const createSeekingPost = async (project, _id) =>
  (await axios.post(getApiUrl(SEEKING_POST), {
    date: Date.now,
    author: project.authorId,
    authorType: project.authorType,
    title: project.title,
    preferredContact: project.preferredContact,
    summary: project.summary,
    memberList: project.memberList
  }))

export const createOfferingPost = async (project, _id) =>
  (await axios.post(getApiUrl(PROJECT_POST), {
    date: Date.now,
    author: project.authorId,
    authorType: project.authorType,
    topic: project.topic,
    preferredContact: project.preferredContact,
    summary: project.summary,
    skillsList: project.skillsList,
    softwareList: project.softwareList,
    maximumMembers: project.maximumMembers,
    advisor: project.advisor,
    memberList: project.memberList
  }))
