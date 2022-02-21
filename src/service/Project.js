import axios from "axios";
import { getApiUrl } from "../util/Consts";

export const getTeamMembers = (projectId) => {

  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

