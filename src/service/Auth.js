import axios from "axios";
import { getApiUrl, SEARCH_USER, USER } from "../util/Consts";

/**
 * query for email
 * @param email
 * @param showErr
 * @returns {Promise<AxiosResponse<any>>}
 */
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

/**
 * query for user
 * @param email
 * @param password
 * @param showErr
 * @returns {Promise<AxiosResponse<any>>}
 */
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

/**
 * query for user by id
 * @param _id
 * @returns {Promise<AxiosResponse<any>>}
 */
export const findUserById = (_id) =>
  axios.post(getApiUrl(SEARCH_USER), {
    _id,
  }).then(res => {
    return res.data[0]

  }).catch(e => {
    console.error(e);
  })

/**
 * create user in API
 * @param name
 * @param email
 * @param password
 * @param type
 * @param showErr
 * @returns {Promise<AxiosResponse<any>>}
 */
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
