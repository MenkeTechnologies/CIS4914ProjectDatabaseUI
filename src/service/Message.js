import axios from "axios";

export const getMessages = (uid) => {

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

export const createMessage = (uid, message) => {

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

