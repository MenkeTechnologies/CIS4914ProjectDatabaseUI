import axios from "axios";
import { getApiUrl, USER } from "../util/Consts";

export const getFaculty = () => {

  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}

export const getStudents = () => {

  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}

export const getUsers = () => {

  axios.get(getApiUrl(USER))
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
}

