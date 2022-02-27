import axios from "axios";

export const getPosts = () => {

  axios.post('/user', {
    firstName: 'Fred', lastName: 'Flintstone'
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}

export const getSeekingPost = () => {

  axios.post('/user', {
    firstName: 'Fred', lastName: 'Flintstone'
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}

export const getOfferingPost = () => {

  axios.post('/user', {
    firstName: 'Fred', lastName: 'Flintstone'
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}

export const createSeekingPost = (uid) => {

  axios.post('/user', {
    firstName: 'Fred', lastName: 'Flintstone'
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}

export const createOfferingPost = (uid) => {

  axios.post('/user', {
    firstName: 'Fred', lastName: 'Flintstone'
  })
}
