import axios from "axios";
import { getApiUrl, SEARCH_USER, USER } from "../util/Consts";

export const checkEmail = (email, showErr) =>
  axios.post(getApiUrl(SEARCH_USER), {
    email,
  }).then(res => {
    console.log(res);
    return res.data[0]

  }).catch(e => {
    showErr(true);
    console.error(e);
  })
export const checkUser = (email, password, showErr) =>
  axios.post(getApiUrl(SEARCH_USER), {
    email,
    password
  }).then(res => {
    console.log(res);
    return res.data[0]

  }).catch(e => {
    console.error(e)
    showErr(true);
  })

export const findUserById = (_id) =>
  axios.post(getApiUrl(SEARCH_USER), {
    _id,
  }).then(res => {
    return res.data[0]

  }).catch(e => {
    console.error(e);
  })


export const createUser = async (name, email, password, type, showErr) =>
  axios.post(getApiUrl(USER), {
    name,
    email,
    password,
    type
  }).then(res => {
    return res.data;
  }).catch(e => {
    console.error(e);
    showErr(true);
  })
