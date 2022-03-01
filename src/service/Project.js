import axios from "axios";

export const getTeamMembers = (projectId) => {

  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    });
}

