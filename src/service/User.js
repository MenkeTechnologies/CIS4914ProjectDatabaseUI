import axios from "axios";
import { getApiUrl, USER } from "../util/Consts";

/**
 * query faculty
 * @returns {Promise<AxiosResponse<any>>}
 */
export const getFaculty = async () =>

  axios.post('/user', {
    firstName: 'Fred', lastName: 'Flintstone'
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    });

/**
 * query students
 * @returns {Promise<AxiosResponse<any>>}
 */
export const getStudents = async () =>

  axios.post('/user', {
    firstName: 'Fred', lastName: 'Flintstone'
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    });

/**
 * query students
 * @returns {Promise<AxiosResponse<any>>}
 */
export const getUsers = async () =>

  axios.get(getApiUrl(USER))
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.error(err);
    });


