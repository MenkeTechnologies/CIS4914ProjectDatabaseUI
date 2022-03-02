import axios from "axios";
import { getApiUrl, SEARCH_USER, USER } from "../util/Consts";

export const checkEmail = (email) =>
  axios.post(getApiUrl(SEARCH_USER), {
    email,
  }).then(res => {
    console.log(res);
    return res.data[0]

  }).catch(err => {
    console.error(err);
  })
export const checkUser = (email, password) =>
  axios.post(getApiUrl(SEARCH_USER), {
    email,
    password
  }).then(res => {
    console.log(res);
    return res.data[0]

  }).catch(err => {
    console.error(err);
  })


export const createUser = async (name, email, password, type) =>
  (await axios.post(getApiUrl(USER), {
    name,
    email,
    password,
    type
  })).data
