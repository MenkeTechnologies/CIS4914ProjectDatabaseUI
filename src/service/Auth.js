import axios from "axios";

export const checkUser = (email, password) => {

  axios.post('/user', {
    firstName: 'Fred', lastName: 'Flintstone'
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    });
}


export const createUser = (user, email, password) => {

  axios.post('/user', {
    firstName: 'Fred', lastName: 'Flintstone'
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    });
}
